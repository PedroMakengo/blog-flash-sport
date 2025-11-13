<template>
  <header class="w-full bg-white py-5 top-0 left-0 z-50">
    <div
      class="px-4 md:px-0 max-w-6xl mx-auto flex items-center justify-between"
    >
      <!-- LOGO -->
      <h1 class="text-2xl font-bold text-[#000638] font-merriweather">
        Flash <span class="font-regular font-roboto text-gray-800">Sport</span>
      </h1>

      <!-- Botão Hambúrguer (visível só no mobile) -->
      <button
        class="md:hidden text-gray-700 focus:outline-none"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu desktop -->
      <nav class="hidden md:block font-roboto">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/" class="text-gray-600 hover:text-black"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" class="text-gray-600 hover:text-black"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" class="text-gray-600 hover:text-black"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>

    <!-- Menu mobile (dropdown ou lateral) -->
    <transition name="slide-fade">
      <nav
        v-if="menuOpen"
        class="md:hidden bg-white shadow-lg mt-3 font-roboto border-t"
      >
        <ul class="flex flex-col py-4 space-y-3 text-center">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-black"
              @click="menuOpen = false"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-black"
              @click="menuOpen = false"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-black"
              @click="menuOpen = false"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
