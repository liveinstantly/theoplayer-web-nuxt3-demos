<script setup lang="ts">
import site from "@/content/site.json";
const isTransparent = false;
const mainClass = "";
</script>

<template>
  <v-app>
    <AppHeader
      :title="site.headerTitle"
      :isTransparent="isTransparent"
    ></AppHeader>
    <v-main :class="mainClass">
      <slot />
    </v-main>
    <AppFooter :title="site.footerTitle"></AppFooter>
  </v-app>
</template>
