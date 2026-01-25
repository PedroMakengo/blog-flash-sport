<template>
  <div>
    <section class="px-3 md:px-0 w-full max-w-3xl mx-auto mt-10 pb-11">
      <div v-if="isError">
        <h1 class="text-3xl font-bold text-red-600">
          Erro ao carregar a publicação.
        </h1>
        <p>
          A publicação com o slug "{{ slug }}" não foi encontrada ou a API
          falhou. Tente novamente.
        </p>
      </div>

      <div v-else-if="isPending" class="flex flex-col w-full gap-5">
        <div class="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
        <div class="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
        <div class="h-[300px] bg-gray-200 animate-pulse rounded w-full"></div>
      </div>

      <div v-else-if="post" class="flex flex-col w-full gap-2">
        <Category :category="`${post.categorias[0].categoria.nome}`" />

        <h1
          class="text-3xl md:text-[46px] font-bold mt-4 mb-1 font-merriweather"
        >
          {{ post.titulo }}
        </h1>
        <span
          class="font-merriweather font-regular text-gray-600 text-sm mb-3"
          >{{ post.dataPublicacao }}</span
        >

        <img
          :src="post.urlImagem"
          alt="Blog Post Image"
          class="w-full h-auto rounded-md"
        />

        <Avatar :avatar="avatar" :author="author" />

        <div class="flex flex-col gap-5 mt-4" v-html="post.conteudo"></div>
      </div>

      <div class="flex flex-col mt-5 gap-4">
        <h2 class="text-3xl md:text-4xl font-roboto font-bold text-[#303030]">
          Continue lendo
        </h2>

        <div class="flex flex-col gap-6 mt-4">
          <div v-if="isPendingPostsAuthors" class="flex flex-col w-full gap-5">
            <div class="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
            <div class="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
            <div
              class="h-[300px] bg-gray-200 animate-pulse rounded w-full"
            ></div>
          </div>

          <template v-else-if="dataPostsAuthors">
            <NuxtLink
              class="flex flex-col md:flex-row gap-4"
              v-for="(element, index) in dataPostsAuthors"
              :to="`/${element.slug}`"
              :key="index"
            >
              <img
                :src="`${element.urlImagem}`"
                alt=""
                class="w-full md:w-[250px] h-[165px] object-cover rounded-md"
              />
              <div class="flex flex-col gap-4">
                <h3
                  class="text-xl md:text-2xl font-merriweather font-bold text-[#303030]"
                >
                  {{ element.titulo }}
                </h3>
                <p class="text-lg font-roboto font-regular text-[#4f4f4f]">
                  {{ firstParagraph(element.conteudo).substring(0, 170) }}...
                </p>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { firstParagraph } from '../utils/firstParagraph'

const avatar = 'https://avatars.githubusercontent.com/u/61626420?v=4'
const author = 'Pedro Makengo'

const route = useRoute()
const slug = computed(() => route.params.slug)

const {
  data: post,
  isPending,
  isError,
  error,
  refetch,
} = useQuery({
  queryKey: ['post', slug],
  queryFn: () => {
    if (!slug.value) throw new Error('Slug inválido')
    return $fetch(`https://api-flash-sport.onrender.com/api/post/${slug.value}`)
  },
  enabled: computed(() => !!slug.value),
})

const authorId = computed(() => post.value?.autorId)

const {
  data: dataPostsAuthors,
  isPending: isPendingPostsAuthors,
  isError: isErrorPostsAuthors,
} = useQuery({
  queryKey: ['posts-authors', authorId],
  queryFn: () => {
    if (!authorId.value) throw new Error('Author ID inválido')
    return $fetch(
      `https://api-flash-sport.onrender.com/api/post/${authorId.value}/autor`,
    )
  },
  enabled: computed(() => !!authorId.value),
})
</script>
