<template>
  <NuxtLink :to="to" class="bg-white">
    <div>
      <img
        :src="image"
        alt="Card Image"
        class="w-full h-[310px] object-cover rounded-sm"
      />
      <div class="flex flex-col gap-2 mt-4">
        <Category :category="category" />
        <h2 class="text-2xl md:text-3xl text-black font-merriweather my-1">
          {{ title }}
        </h2>
        <span class="font-merriweather font-regular text-gray-600 text-sm">
          {{ data }}
        </span>
        <!-- <p class="font-roboto text-gray-800 mt-2 mb-5 text-md">
          {{ describe }}
        </p> -->
        <Avatar :avatar="avatar" :author="author" />
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue";
const loading = ref(true);

const props = defineProps<{
  to: string;
  image: string;
  title: string;
  data: string;
  category: string;
  describe: string;
  avatar: string;
  author: string;
}>();
</script>
