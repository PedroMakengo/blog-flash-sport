<template>
  <NuxtLink :to="to">
    <article class="break-inside-avoid mb-8 group">
      <div class="overflow-hidden rounded-2xl mb-4">
        <img
          alt="Jogador de futebol celebrando"
          class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          :src="image"
        />
      </div>
      <div class="flex items-center space-x-2 mb-2">
        <span
          class="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide bg-blue-100 text-blue-800"
          >{{ category }}</span
        >
        <span class="text-xs text-slate-500">{{
          formatarDataEvento(data)
        }}</span>
      </div>
      <h2
        class="text-2xl font-display font-bold mb-3 leading-tight group-hover:text-primary transition-colors"
      >
        {{ title }}
      </h2>
      <div class="flex items-center space-x-3">
        <img
          alt="Pedro Makengo"
          class="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"
          src="https://avatars.githubusercontent.com/u/61626420?v=4"
        />
        <span class="text-sm font-medium">Pedro Makengo</span>
      </div>
    </article>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue'
const loading = ref(true)
import { formatarDataEvento } from '../../utils/formatData'

const props = defineProps<{
  to: string
  image: string
  title: string
  data: string
  category: string
  describe: string
  avatar: string
  author: string
}>()
</script>
