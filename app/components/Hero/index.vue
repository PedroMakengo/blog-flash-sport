<template>
  <section class="w-full bg-white h-80">
    <div
      class="px-3 md:px-0 max-w-6xl h-full mx-auto flex flex-col items-center justify-center py-10"
    >
      <h1 class="text-3xl md:text-5xl font-bold font-merriweather">
        Acompanhe todas as informações aqui
      </h1>
      <p class="text-gray-600 text-xl my-2 mt-2 font-roboto">
        Seu blog de notícias desportiva sobre PopFlash
      </p>

      <form
        action=""
        class="w-full md:w-[350px] flex justify-between border-2 border-[#DDDDDD] mt-10 rounded-sm gap-2"
      >
        <input
          type="text"
          placeholder="Pesquisa artigo"
          class="w-full p-2 px-6 outline-none font-roboto placeholder:text-gray-400"
        />
        <button class="w-1/7 flex items-center justify-center">
          <Search color="#DDDDDD" :size="18" />
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { Search } from "lucide-vue-next";
</script>
