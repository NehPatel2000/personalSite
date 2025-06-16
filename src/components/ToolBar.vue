<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  options: Array<{ label: string; value: string }>;
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

function updateModel(val: string) {
  emit('update:modelValue', val);
}
</script>

<template>
  <q-page-sticky expand position="top">
    <q-toolbar class="toolbar bg-white wrap text-black shadow-2 border-bottom">
      <q-space />
      <q-btn-toggle
        class="toolbara q-pa-sm"
        :model-value="props.modelValue"
        @update:model-value="updateModel"
        flat
        stretch
        toggle-color="secondary"
        :options="props.options"
      />
    </q-toolbar>
  </q-page-sticky>
</template>

<style scoped lang="scss">
.toolbar {
  z-index: 1000;
  top: 0;
}
</style>
