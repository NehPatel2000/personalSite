<script setup lang="ts">
import { getExperiences } from 'src/data/Experiences';
import { ExperienceType } from 'src/components/models';

const experiences = getExperiences();
const sections = [
  {
    label: 'Work Experience',
    icon: 'mdi-briefcase',
    items: experiences.filter((e) => e.type === ExperienceType.Work),
  },
  {
    label: 'Education Experience',
    icon: 'mdi-school',
    items: experiences.filter((e) => e.type === ExperienceType.Education),
  },
];
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div
      v-for="section in sections"
      :key="section.label"
      class="col-12 col-md-6"
    >
      <div class="row q-gutter-lg q-ml-lg">
        <q-icon
          :name="section.icon"
          class="text-accent col-md-auto"
          size="80px"
        ></q-icon>
        <div class="text-h4 text-secondary self-center col-md-auto">
          {{ section.label }}
        </div>
      </div>
      <q-timeline>
        <q-timeline-entry
          v-for="experience in section.items"
          :key="experience.id"
        >
          <q-card-section class="bg-accent q-ma-md text-primary">
            <div class="text-h6">{{ experience.title }}</div>
            <div class="text-subtitle2">{{ experience.place }}</div>
            <div class="text-caption">{{ experience.duration }}</div>
            <div class="q-mt-sm">{{ experience.description }}</div>
          </q-card-section>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>
