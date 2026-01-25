<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<template>
  <div class="flex flex-col pb-20">
    <Hero class="my-10" />

    <section class="w-full max-w-6xl mx-auto px-4 md:px-0">
      <nav
        class="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-hide border-b border-slate-200"
      >
        <button
          @click="categoriaSelecionada = null"
          :class="[
            'whitespace-nowrap px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shrink-0',
            !categoriaSelecionada
              ? 'bg-[#1e3a8a] text-white shadow-md'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100',
          ]"
        >
          Tudo
        </button>

        <button
          v-for="categoria in categorias"
          :key="categoria.id"
          @click="categoriaSelecionada = categoria.nome"
          :class="[
            'whitespace-nowrap px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shrink-0',
            categoriaSelecionada === categoria.nome
              ? 'bg-[#1e3a8a] text-white shadow-md'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100',
          ]"
        >
          {{ categoria.nome }}
        </button>
      </nav>
    </section>

    <section class="w-full max-w-6xl mx-auto px-4 md:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        <div class="lg:col-span-8">
          <template v-if="isLoading">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div v-for="n in 6" :key="n" class="flex flex-col gap-4">
                <div
                  class="w-full h-48 bg-gray-200 animate-pulse rounded-lg"
                ></div>
                <div class="space-y-3">
                  <div class="w-24 h-5 bg-gray-200 animate-pulse rounded"></div>
                  <div
                    class="w-full h-7 bg-gray-200 animate-pulse rounded"
                  ></div>
                  <div
                    class="w-2/3 h-4 bg-gray-200 animate-pulse rounded"
                  ></div>
                </div>
              </div>
            </div>
          </template>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            <Card
              v-for="(element, index) in postsFiltrados"
              :key="index"
              :to="`/${element.slug}`"
              :image="element.urlImagem"
              :title="element.titulo"
              :data="element.dataPublicacao"
              :category="element.categorias[0].categoria.nome"
              avatar="https://avatars.githubusercontent.com/u/61626420?v=4"
              author="Pedro Makengo"
            />
          </div>
        </div>

        <aside class="lg:col-span-4 space-y-12 lg:sticky lg:top-24 h-fit">
          <div class="flex flex-col">
            <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
              <TrendingUp class="text-primary" />
              <h3
                class="font-bold font-roboto text-xl uppercase tracking-tight"
              >
                Mais lidas
              </h3>
            </div>

            <div class="flex flex-col gap-6 mt-6">
              <NuxtLink
                class="group flex gap-4 items-start"
                v-for="(artigo, index) in postsRecentes"
                :key="artigo.id"
                :to="artigo.slug"
              >
                <div class="shrink-0">
                  <h2
                    class="text-4xl font-display font-black text-slate-200 group-hover:text-[#1e3a8a]/20 transition-colors leading-none"
                  >
                    0{{ index + 1 }}
                  </h2>
                </div>
                <div class="flex flex-col">
                  <p
                    class="font-bold font-roboto group-hover:text-[#1e3a8a] transition-colors leading-snug mb-1"
                  >
                    {{ artigo.titulo }}
                  </p>
                  <span class="text-xs text-slate-500 flex items-center gap-1">
                    <Clock :size="12" />
                    {{ calcularHorasDesde(artigo.dataPublicacao) }}h atrás
                  </span>
                </div>
              </NuxtLink>
            </div>

            <div
              class="mt-10 bg-slate-50 border border-dashed border-slate-300 rounded-xl h-64 flex flex-col justify-center items-center text-slate-400"
            >
              <span class="text-xs uppercase font-semibold tracking-widest mb-2"
                >Publicidade</span
              >
              <p class="text-sm">Banner Lateral</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ITPost {
  id: string
  titulo: string
  slug: string
  conteudo: string
  caminhoImagem: string | null
  urlImagem: string
  estado: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  autorId: string
  dataPublicacao: string // ISO date
  dataCriacao: string // ISO date
  dataAtualizacao: string | null
  categorias: any[]
}

import { TrendingUp } from 'lucide-vue-next'

import { calcularHorasDesde } from '../utils/formatDatetimeEvento'
import { useQuery } from '@tanstack/vue-query'

const categoriaSelecionada = ref<string | null>(null)
// const posts = ref<ITPost[]>([])

const { data, isPending, isLoading, isError, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const response = await fetch(
      'https://api-flash-sport.onrender.com/api/post',
    )
    return response.json() as Promise<ITPost[]>
  },
})

const posts = computed(() => data.value ?? [])

const { data: postsRecentes } = useQuery({
  queryKey: ['posts-recentes'],
  queryFn: async () => {
    const response = await fetch(
      'https://api-flash-sport.onrender.com/api/post',
    )
    return response.json() as Promise<ITPost[]>
  },
  select: (posts: ITPost[]) => {
    const agora = Date.now()
    const limite24h = 24 * 60 * 60 * 1000

    return posts
      .filter(
        (post) => agora - new Date(post.dataPublicacao).getTime() <= limite24h,
      )
      .sort(
        (a, b) =>
          new Date(b.dataPublicacao).getTime() -
          new Date(a.dataPublicacao).getTime(),
      )
      .slice(0, 5)
  },
})

const { data: categorias } = useQuery({
  queryKey: ['categorias'],
  queryFn: async () => {
    const response = await fetch(
      'https://api-flash-sport.onrender.com/api/category',
    )
    return response.json()
  },
})

const postsFiltrados = computed(() => {
  if (!categoriaSelecionada.value) {
    return posts.value
  }

  console.log(posts.value)

  return posts.value.filter((post) =>
    post.categorias.some(
      (c) => c.categoria.nome === categoriaSelecionada.value,
    ),
  )
})
</script>
