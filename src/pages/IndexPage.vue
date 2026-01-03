<script setup lang="ts">
import IntroductionSection from 'src/components/IntroductionSection.vue';
import ToolBar from 'src/components/ToolBar.vue';
import ExperienceCardSection from 'src/components/ExperienceCardSection.vue';
import SkillsSection from 'src/components/SkillsSection.vue';
import { ref } from 'vue';
defineOptions({
  name: 'ErrorNotFound',
});
const options = ref([
  { label: 'Home', value: 'home' },
  { label: 'Resume', value: 'resume' },
  { label: 'Contact', value: 'contact' },
  { label: 'Personal', value: 'personal' },
]);
const model = ref('home');
</script>
<template>
  <q-layout
    view="lHh Lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-page-container>
      <q-page>
        <div class="bg-primary q-col q-mt-xl">
          <introduction-section />
          <experience-card-section class="q-pa-md" />
        </div>
        <div class="bg-secondary q-col q-mt-xl">
          <skills-section class="q-pa-md" />
          ello
        </div>
        <ToolBar :options="options" v-model="model" />
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
