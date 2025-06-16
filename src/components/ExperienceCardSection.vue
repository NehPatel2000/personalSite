<script setup lang="ts">
import { defineProps } from 'vue';
import { ExperienceCard } from 'src/components/models';
defineProps<{
  experiences: ExperienceCard[];
}>();
</script>

<template>
  <div>
    <q-card
      v-for="experience in experiences"
      :key="experience.id"
      class="my-card q-mb-md"
    >
      <q-card-section>
        <div class="text-h6">{{ experience.title }}</div>
        <div class="text-subtitle2">{{ experience.place }}</div>
        <div class="text-caption">{{ experience.duration }}</div>
        <div class="q-mt-sm">{{ experience.description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
