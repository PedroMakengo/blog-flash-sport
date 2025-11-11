<template>
  <div>
    <Header />

    <section class="px-3 md:px-0 w-full max-w-3xl mx-auto mt-10 pb-11">
      <div class="flex flex-col w-full gap-2">
        <Category category="Food Theory" />
        <h1
          class="text-3xl md:text-[46px] font-bold mt-4 mb-1 font-merriweather"
        >
          What I Learned About Life and Food Backpacking Around Greece
        </h1>
        <span class="font-merriweather font-regular text-gray-600 text-sm mb-3"
          >Jun 21, 2021 • 11 min read</span
        >

        <img
          src="/images/post-thumbal.png"
          alt="Blog Post Image"
          class="w-full h-auto rounded-md"
        />

        <Avatar :avatar="avatar" :author="author" />

        <div class="flex flex-col gap-5 mt-4">
          <p class="text-2xl font-roboto font-medium text-[#434343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut
            ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.
          </p>

          <p
            v-for="index in 5"
            :key="index"
            class="text-xl font-roboto text-[#434343] font-regular"
          >
            Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
            malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
            adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
            neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
            diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus
            at tellus diam.
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-5 gap-4">
        <h2
          class="text-3xl md:text-4xl font-merriweather font-bold text-[#303030]"
        >
          Keep reading
        </h2>

        <div class="flex flex-col gap-6 mt-4">
          <NuxtLink
            :to="`/sobre-aqui-${index}`"
            class="flex flex-col md:flex-row gap-4"
            v-for="index in 2"
            :key="index"
          >
            <img
              :src="`/images/${index}.png`"
              alt=""
              class="w-full md:w-[250] h-[165]"
            />
            <div class="flex flex-col gap-4">
              <h3
                class="text-xl md:text-2xl font-merriweather font-bold text-[#303030]"
              >
                Why you don’t need more than 3 pieces of clothing
              </h3>
              <p class="text-lg font-roboto font-regular text-[#4f4f4f]">
                Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
                amet nisl tortor arcu non id nulla mauris neque nisl magna.
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const avatar = "https://avatars.githubusercontent.com/u/61626420?v=4";
const author = "Pedro Makengo";
</script>
