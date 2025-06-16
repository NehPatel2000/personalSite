<script setup lang="ts">
import nehpateImg from 'src/assets/nehpatel.png';
</script>

<template>
  <div class="intro-section q-pa-xl q-gutter-md">
    <img class="profile-img" :src="nehpateImg" alt="Neh Patel" />
    <div class="text-h1 title">Neh Patel</div>
    <div class="text-h6 q-mb-md q-pb-xl">
      Hello! I am a Software Engineer based out of Tennessee. I specialize in
      building full-stack web applications with a focus on user experience and
      performance. I am currently focused on developing machine learning
      applications in my free time and continuing to learn new dev-ops
      technologies.
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.intro-section {
  background-color: $primary;
  color: black;
  padding: 32px;
}

.profile-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  display: block;
}
.title {
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
}
</style>
