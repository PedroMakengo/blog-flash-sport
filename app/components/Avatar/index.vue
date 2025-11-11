<template>
  <div class="flex items-center">
    <img :src="avatar" alt="Author Avatar" class="w-8 h-8 rounded-full" />
    <span class="font-merriweather ml-2 font-bold">{{ author }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  avatar: string;
  author: string;
}>();
</script>
