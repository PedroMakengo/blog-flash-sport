<template>
  <span class="text-white self-start px-6 py-2 bg-[#283A61] rounded-sm">{{
    category
  }}</span>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  category: string;
}>();
</script>
