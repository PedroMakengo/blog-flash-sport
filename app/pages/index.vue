<template>
  <div class="flex flex-col pb-20">
    <Header />

    <Hero />

    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-3 md:px-0 md:max-w-6xl mx-auto"
    >
      <Card
        v-for="index in 9"
        :to="`/what-traveling-greece-for-2-weeks-taught-me-about-life-${index}`"
        :image="`/images/image-${index}.png`"
        :key="index"
        title="What Traveling Greece For 2 Weeks Taught Me About Life"
        data="Jun 21, 2021 • 11 min read"
        category="Travel"
        describe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras."
        avatar="https://avatars.githubusercontent.com/u/61626420?v=4"
        author="Pedro Makengo"
        class="w-full"
      />
    </section>
  </div>
</template>

<script setup>
const images = import.meta.glob("@/assets/images/*.png", {
  eager: true,
  import: "default",
});

console.log("imagens carregadas:", images);
</script>
