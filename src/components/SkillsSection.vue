<script setup lang="ts">
import { useQuasar } from 'quasar';
import { getSkills } from 'src/data/Skills';
import { computed } from 'vue';
const skills: { name: string; iconClass: string }[] = getSkills();
const $q = useQuasar();
const columns = computed(() => {
  if ($q.screen.xs) return 1;
  if ($q.screen.sm) return 3;
  if ($q.screen.md) return 5;
  if ($q.screen.lg) return 7;
  return 7; // xl
});
</script>
<template>
  <div class="bg-primary">
    <div class="row justify-center items-center q-py-lg">
      <div class="col-auto text-h2 text-secondary text-center">Skills</div>
    </div>
  </div>
  <div
    class="skills-hex-grid bg-primary q-pa-xl"
    :style="{ gridTemplateColumns: `repeat(${columns}, 90px)` }"
  >
    <div
      v-for="(skill, i) in skills"
      :key="skill.name"
      class="skill-item"
      :class="{ 'odd-row': Math.floor(i / columns) % 2 === 1 }"
    >
      <i :class="skill.iconClass" class="colored icon"></i>
      <q-tooltip>{{ skill.name }}</q-tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills-hex-grid {
  display: grid;
  grid-auto-rows: 80px;
  justify-content: center;
  position: relative;
}
.skill-item {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
}
.skill-item:hover {
  transform: scale(2);
  box-shadow: inset 0 0 20px 16px $accent;
  z-index: 10;
}
.icon {
  font-size: 50px;
}
.odd-row {
  margin-left: 45px; /* half of 90px */
}
</style>
