<template>
  <NuxtLink :to="to" class="bg-white">
    <div v-if="loading">
      <!-- Skeleton da imagem -->
      <div class="w-full h-48 bg-gray-300 animate-pulse rounded"></div>

      <div class="flex flex-col gap-2 mt-4">
        <!-- Skeleton categoria -->
        <div class="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>

        <!-- Skeleton título -->
        <div class="w-3/4 h-8 bg-gray-300 animate-pulse rounded mt-1"></div>

        <!-- Skeleton data -->
        <div class="w-1/3 h-4 bg-gray-300 animate-pulse rounded mt-1"></div>

        <!-- Skeleton descrição -->
        <div class="w-full h-16 bg-gray-300 animate-pulse rounded mt-2"></div>

        <!-- Skeleton avatar -->
        <div class="flex items-center gap-2 mt-2">
          <div class="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
          <div class="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </div>

    <div v-else>
      <img :src="image" alt="Card Image" class="w-full" />
      <div class="flex flex-col gap-2 mt-4">
        <Category :category="category" />
        <h2 class="text-2xl md:text-3xl text-black font-merriweather my-1">
          {{ title }}
        </h2>
        <span class="font-merriweather font-regular text-gray-600 text-sm">
          {{ data }}
        </span>
        <p class="font-roboto text-gray-800 mt-2 mb-5 text-md">
          {{ describe }}
        </p>
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

onMounted(() => {
  const img: any = new Image();
  img.src = props.image;
  img.onload = () => {
    loading.value = false;
  };
});
</script>
