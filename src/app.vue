<script setup lang="ts">
useHead({
  title: "THEOplayer Demo (Web SDK with Nuxt3/Vue3/Veutify3) | LiveInstantly, LLC.",
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.myth.theoplayer.com/f6fe7854-1374-4637-b68e-9c43b13f739b/ui.css'
    },
  ],
  script: [
    {
      type: "text/javascript",
      src: "https://cdn.myth.theoplayer.com/f6fe7854-1374-4637-b68e-9c43b13f739b/THEOplayer.js",
      body: true,
    },
    {
      type: "text/javascript",
      src: "https://mediamelon-builds.s3.amazonaws.com/MM-RELEASE-BUILDS/SDK_RELEASES/Javascript/2022-11-17/mmsmartstreaming_theoplayer.min.js",
      body: true,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
