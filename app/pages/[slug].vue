<template>
  <div>
    <Header />

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

      <div v-else-if="data" class="flex flex-col w-full gap-2">
        <Category :category="`${data.categorias[0].categoria.nome}`" />

        <h1
          class="text-3xl md:text-[46px] font-bold mt-4 mb-1 font-merriweather"
        >
          {{ data.titulo }}
        </h1>
        <span
          class="font-merriweather font-regular text-gray-600 text-sm mb-3"
          >{{ data.dataPublicacao }}</span
        >

        <img
          :src="data.urlImagem"
          alt="Blog Post Image"
          class="w-full h-auto rounded-md"
        />

        <Avatar :avatar="avatar" :author="author" />

        <div class="flex flex-col gap-5 mt-4" v-html="data.conteudo"></div>
      </div>

      <div class="flex flex-col mt-5 gap-4"></div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";

const avatar = "https://avatars.githubusercontent.com/u/61626420?v=4";
const author = "Pedro Makengo";

const route = useRoute();
const slug = computed(() => route.params.slug);

const { data, isPending, isError, error, refetch } = useQuery({
  queryKey: ["post", slug],
  queryFn: () => {
    if (!slug.value) throw new Error("Slug inválido");
    return $fetch(
      `https://api-flash-sport.onrender.com/api/post/${slug.value}`
    );
  },
  enabled: computed(() => !!slug.value),
});
</script>
