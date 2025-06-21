<script setup lang="ts">
import { getSkills } from 'src/data/Skills';
const skills: { name: string; iconClass: string }[] = getSkills();
const columns = 7; // Adjust for your preferred number of columns
</script>
<template>
  <div class="relative-position">
    <div class="absolute-center text-h2 vertical-middle text-white">Skills</div>
  </div>
  <div class="skills-hex-grid q-pa-xl">
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
  grid-template-columns: repeat(7, 90px); /* tighter columns */
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
