<template>
  <header
    class="w-full bg-white border-b border-gray-300 py-5 top-0 left-0 z-50"
  >
    <div
      class="px-4 md:px-0 max-w-6xl mx-auto flex items-center justify-between"
    >
      <h1 class="text-2xl font-bold text-[#000638] font-playfair">
        Flash <span class="font-regular font-roboto text-gray-800">Sport</span>
      </h1>

      <nav class="font-roboto flex-1 justify-center items-center space-x-8">
        <ul class="flex gap-6 items-center justify-center font-roboto">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-600 font-semibold font-roboto hover:text-black"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/sobre"
              class="text-gray-600 font-semibold font-roboto hover:text-black"
              >Sobre</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacto"
              class="text-gray-600 font-semibold font-roboto hover:text-black"
              >Contacto</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <div class="space-x-4">
        <button class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon-icon lucide-moon"
          >
            <path
              d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>
