<script setup lang="ts">
import IntroductionSection from 'src/components/IntroductionSection.vue';
import ToolBar from 'src/components/ToolBar.vue';
import ExperienceCardSection from 'src/components/ExperienceCardSection.vue';
import { ref } from 'vue';
import { ExperienceCard, ExperienceType } from 'src/components/models';
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

const experiences = ref<ExperienceCard[]>([
  {
    id: 1,
    title: 'Masters of Science In Computer Science',
    place: 'University of Tennessee Knoxville',
    duration: '2013 - Present',
    type: ExperienceType.Education,
    description:
      "Currently pursuing a Master's in Computer Science, focusing on machine learning and software engineering. Delving into advanced concepts and real-world applications.",
  },
  {
    id: 2,
    title: 'Bachelor of Science In Computer Science',
    type: ExperienceType.Education,
    place: 'University of Tennessee Knoxville',
    duration: '2019 - 2023',
    description:
      'Graduated Summa Cum Laude with a 4.0 GPA and a Minor in Cybersecurity. Earned awards including Volunteer of Distinction and the Gonzalez Family Award for outstanding achievement.',
  },
  {
    id: 3,
    title: 'Software Engineering Intern',
    type: ExperienceType.Work,
    place: 'Garmin',
    duration: 'May 2022 - Present',
    description:
      'Revitalized backend services using Java Reactor Core (40% faster response), added features in Scala/TypeScript, and managed services with Spring Boot, RabbitMQ, Kubernetes, and Maven.',
  },
  {
    id: 4,
    title: 'Undergraduate Research Assistant',
    type: ExperienceType.Work,
    place: 'University of Tennessee, Knoxville',
    duration: 'Nov 2021 - Jul 2022',
    description:
      'Visualized geographic mapping data for the National Park Service, integrated UTK APIs with Intel oneApi, and developed Python web-based visualizations for large datasets.',
  },
  {
    id: 5,
    title: 'Teaching Assistant',
    place: 'University of Tennessee Knoxville',
    type: ExperienceType.Work,
    duration: 'Feb 2021 - Dec 2021',
    description:
      'Facilitated learning in computer science courses, assisted with materials, labs, and provided one-on-one guidance to students.',
  },
]);
</script>
<template>
  <q-layout
    view="lHh Lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-page-container>
      <ToolBar :options="options" v-model="model" />
      <div class="bg-secondary q-col q-mt-xl">
        <introduction-section />
        <experience-card-section class="q-pa-md" :experiences="experiences" />
        ello
      </div>
    </q-page-container>
  </q-layout>
</template>
