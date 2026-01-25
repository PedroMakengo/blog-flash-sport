<template>
  <div class="flex flex-col pb-20">
    <Header />

    <Hero class="my-10" />

    <section class="w-6xl mx-auto">
      <nav
        class="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-hide border-b border-slate-200"
      >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full bg-[#1e3a8a] text-white font-medium text-sm"
          href="#"
          >Tudo</a
        >
        <a
          v-for="categoria in categorias"
          :key="categoria.id"
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >{{ categoria.nome }}</a
        >
      </nav>
    </section>

    <section class="w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8">
          <template v-if="isLoading">
            <div
              v-for="(element, index) in 6"
              :key="index"
              class="grid grid-cols-2 gap-4"
            >
              <div class="w-full h-48 bg-gray-300 animate-pulse rounded"></div>

              <div class="flex flex-col gap-2 mt-4">
                <!-- Skeleton categoria -->
                <div class="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>

                <!-- Skeleton título -->
                <div
                  class="w-3/4 h-8 bg-gray-300 animate-pulse rounded mt-1"
                ></div>

                <!-- Skeleton data -->
                <div
                  class="w-1/3 h-4 bg-gray-300 animate-pulse rounded mt-1"
                ></div>

                <!-- Skeleton descrição -->
                <div
                  class="w-full h-16 bg-gray-300 animate-pulse rounded mt-2"
                ></div>

                <!-- Skeleton avatar -->
                <div class="flex items-center gap-2 mt-2">
                  <div
                    class="w-10 h-10 bg-gray-300 animate-pulse rounded-full"
                  ></div>
                  <div class="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </template>
          <div class="grid grid-cols-2 gap-4" v-else>
            <Card
              v-for="(element, index) in data"
              :to="`/${element.slug}`"
              :image="`${element.urlImagem}`"
              :key="index"
              :title="`${element.titulo}`"
              :data="element.dataPublicacao"
              :category="`${element.categorias[0].categoria.nome}`"
              avatar="https://avatars.githubusercontent.com/u/61626420?v=4"
              author="Pedro Makengo"
              class="w-full"
            />
          </div>
        </div>
        <div class="lg:col-span-4 space-y-12">
          <div class="flex-col flex">
            <div class="flex gap-2">
              <TrendingUp />
              <h3 class="font-bold font-roboto text-xl">Mais lidas</h3>
            </div>

            <div class="flex flex-col gap-4 mt-4">
              <NuxtLink
                class="flex gap-4 items-center"
                v-for="(artigo, index) in data"
                :key="artigo.id"
                :to="artigo.slug"
              >
                <div class="">
                  <h2
                    class="text-4xl font-display font-black text-slate-200 dark:text-slate-800 leading-none"
                  >
                    0{{ index + 1 }}
                  </h2>
                </div>
                <div class="flex flex-col">
                  <p
                    class="font-bold font-roboto hover:text-primary transition-colors leading-snug block mb-1"
                  >
                    {{ artigo.titulo }}
                  </p>
                  <span class="text-xs text-slate-500"
                    >{{ calcularHorasDesde(artigo.dataPublicacao) }} horas</span
                  >
                </div>
              </NuxtLink>
            </div>

            <div
              class="mt-8 bg-slate-200 border border-dashed border-slate-400 rounded-md h-55 flex justify-center items-center"
            >
              <p>Publicação Lateral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { TrendingUp } from 'lucide-vue-next'

import { calcularHorasDesde } from '../utils/formatDatetimeEvento'

const { data, isPending, isLoading, isError, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: () => $fetch('https://api-flash-sport.onrender.com/api/post'),
})

const { data: categorias } = useQuery({
  queryKey: ['categorias'],
  queryFn: () => $fetch('https://api-flash-sport.onrender.com/api/category'),
})
</script>
