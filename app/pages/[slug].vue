<template>
  <div>
    <Header />

    <section class="px-3 md:px-0 w-full max-w-3xl mx-auto mt-10 pb-11">
      <div class="flex flex-col w-full gap-2">
        <Category category="Food Theory" />
        <h1
          class="text-3xl md:text-[46px] font-bold mt-4 mb-1 font-merriweather"
        >
          1221
        </h1>
        <span class="font-merriweather font-regular text-gray-600 text-sm mb-3"
          >Jun 21, 2021 • 11 min read</span
        >

        <img
          :src="200"
          alt="Blog Post Image"
          class="w-full h-auto rounded-md"
        />

        <Avatar :avatar="avatar" :author="author" />

        <div class="flex flex-col gap-5 mt-4" v-html="teste"></div>
      </div>

      <div class="flex flex-col mt-5 gap-4">
        <h2
          class="text-3xl md:text-4xl font-merriweather font-bold text-[#303030]"
        >
          Keep reading
        </h2>

        <div class="flex flex-col gap-6 mt-4">
          <NuxtLink
            :to="`/posts/sobre-aqui-${index}`"
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

    <!-- <h1 v-if="data">
      {{ data }}
    </h1>

    {{ slug }} -->
  </div>
</template>

<script setup>
const avatar = "https://avatars.githubusercontent.com/u/61626420?v=4";
const author = "Pedro Makengo";

const route = useRoute();
const slug = route.params.slug;
const postId = slug;

// const { data, isPending, isError, error, refetch } = useQuery({
//   queryKey: ["post", postId.value],
//   queryFn: () => {
//     if (!postId.value) throw new Error("Slug inválido");
//     return $fetch(
//       `https://api-flash-sport.onrender.com/api/post/${postId.value}`
//     );
//   },
//   enabled: !!postId.value, // Só executa se postId for válido
// });

// console.log(postId.value);
// console.log(data.value);
</script>
