<template>
  <header class="w-full bg-white py-7">
    <div
      class="px-3 md:px-0 max-w-6xl mx-auto flex items-center justify-between"
    >
      <h1 class="text-2xl font-bold text-[#000638] font-merriweather">
        Flash <span class="font-regular font-roboto text-gray-800">Sport</span>
      </h1>

      <nav class="hidden md:block font-roboto">
        <ul class="flex gap-4">
          <li class="inline-block ml-4">
            <NuxtLink to="/" class="text-gray-600">Blog </NuxtLink>
          </li>
          <li class="inline-block ml-4">
            <NuxtLink to="/" class="text-gray-600">About</NuxtLink>
          </li>
          <li class="inline-block ml-4">
            <NuxtLink to="/" class="text-gray-600">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
