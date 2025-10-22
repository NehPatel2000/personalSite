<script setup lang="ts">
// import nehpateImg from 'src/assets/nehpatel.png';

function openResume() {
  window.open(
    'https://docs.google.com/document/d/11uoJRiyZ6O6QaLgwPSFOKo0c7SXT8UC1d1g6RbOpjik/edit?usp=sharing',
    '_blank'
  );
}
</script>

<template>
  <div class="intro-section bg-primary row q-pa-xl">
    <!-- <img
      class="profile-img col self-center"
      :src="nehpateImg"
      alt="Neh Patel"
    /> -->
    <div class="intro-text col">
      <div class="text-h1 title">Neh Patel</div>
      <div class="text-h6 q-mb-md q-pb-xl">
        Hello! I am a Software Engineer based out of Tennessee. I specialize in
        building full-stack web applications with a focus on user experience and
        performance. I am currently focused on developing machine learning
        applications in my free time and continuing to learn new dev-ops
        technologies.
      </div>
      <q-btn color="secondary" rounded @click="openResume">
        <q-icon left size="3em" name="mdi-file-account-outline" />
        <div>Resume</div>
      </q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.profile-img {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.title {
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
}
</style>
