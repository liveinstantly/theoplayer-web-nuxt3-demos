<script setup lang="ts">
// Importing array from local JSON file
import heroContents from "@/content/player/demos/heros.json";
import demoContents from "@/content/player/demos/contents.json";

definePageMeta({
  layout: "default-transparent",
});
</script>

<template>
  <v-container fluid class="pa-0">
    <v-carousel height="50vh" width="100%">
      <v-carousel-item
        cover
        v-for="(content, i) in heroContents.contents"
        :key="i"
        :src="content.thumbnail"
      >
        <v-container class="pb-16" style="height: 100%;">
          <v-row align="end" justify="end" no-gutters style="height: 100%;">
            <v-col class="text-right">
              <div class="text-white">{{ content.title }}</div>
              <NuxtLink :to="`/play/${content.id}`">
                <v-btn>Play</v-btn>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <v-sheet v-for="(group, i) in demoContents.groups" :key="`group-${i}`">
      <v-container class="py-2">
        <v-label class="text-h6">{{ group.name }}</v-label>
      </v-container>
      <v-container class="py-1">
        <v-slide-group multiple show-arrows>
          <v-slide-group-item
            v-for="(content, j) in group.contents"
            :key="`group-${i}-content-${j}`"
          >
            <NuxtLink :to="`/play/${content.id}`">
              <v-card border class="pa-0 ma-1" style="height: 240px; width: 240px">
                <v-img :src="content.poster"></v-img>
                <v-card-title>{{ content.title }}</v-card-title>
                <v-card-text>{{ content.text }}</v-card-text>
              </v-card>
            </NuxtLink>
          </v-slide-group-item>
        </v-slide-group>
      </v-container>
    </v-sheet>

    <v-container style="height: 800px"></v-container>
  </v-container>
</template>

<style scoped>
/* This does not seem to work */
.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}
</style>
