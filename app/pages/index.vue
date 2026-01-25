<template>
  <div class="flex flex-col pb-20">
    <Header />

    <Hero class="my-10" />

    <div class="w-6xl mx-auto mb-10">
      <nav
        class="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-hide border-b border-slate-200"
      >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full bg-[#1e3a8a] text-white font-medium text-sm"
          href="#"
          >Tudo</a
        >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >Futebol</a
        >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >Basquetebol</a
        >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >Judo</a
        >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >Atletismo</a
        >
        <a
          class="whitespace-nowrap px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-sm transition-colors"
          href="#"
          >Futebol Comunitário</a
        >
      </nav>
    </div>

    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-3 md:px-0 md:max-w-6xl mx-auto"
    >
      <template v-if="isLoading">
        <div v-for="(element, index) in 6" :key="index">
          <div class="w-full h-48 bg-gray-300 animate-pulse rounded"></div>

          <div class="flex flex-col gap-2 mt-4">
            <!-- Skeleton categoria -->
            <div class="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>

            <!-- Skeleton título -->
            <div class="w-3/4 h-8 bg-gray-300 animate-pulse rounded mt-1"></div>

            <!-- Skeleton data -->
            <div class="w-1/3 h-4 bg-gray-300 animate-pulse rounded mt-1"></div>

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
        v-else
      />
    </section>
  </div>
</template>

<script setup>
const { data, isPending, isLoading, isError, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: () => $fetch('https://api-flash-sport.onrender.com/api/post'),
})
</script>
