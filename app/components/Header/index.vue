<template>
  <header
    class="w-full bg-white border-b border-gray-300 py-4 sticky top-0 left-0 z-50"
  >
    <div
      class="px-4 md:px-0 max-w-6xl mx-auto flex items-center justify-between"
    >
      <h1
        class="text-xl md:text-2xl font-bold text-[#000638] font-playfair shrink-0"
      >
        Flash <span class="font-normal font-roboto text-gray-800">Sport</span>
      </h1>

      <nav class="hidden md:flex flex-1 justify-center items-center">
        <ul class="flex gap-8 items-center font-roboto">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/sobre" class="nav-link">Sobre</NuxtLink></li>
          <li>
            <a
              href="https://wa.me/921538972?text=Quero-participar-do-projeto"
              class="nav-link"
              >Contacto</a
            >
          </li>
        </ul>
      </nav>

      <div class="flex items-center space-x-4">
        <button
          class="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Moon :size="20" />
        </button>

        <button @click="isOpen = !isOpen" class="md:hidden p-2 text-gray-600">
          <Menu v-if="!isOpen" :size="28" />
          <X v-else :size="28" />
        </button>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg"
      >
        <ul class="flex flex-col p-4 space-y-4 font-roboto font-semibold">
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="block py-2"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sobre" @click="isOpen = false" class="block py-2"
              >Sobre</NuxtLink
            >
          </li>
          <li>
            <a
              href="https://wa.me/921538972?text=Quero-participar-do-projeto"
              class="block py-2"
              >Contacto</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Moon, Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
</script>

<style scoped>
@reference "../../assets/css/main.css";

.nav-link {
  @apply text-gray-600 font-semibold font-roboto hover:text-black transition-colors;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
