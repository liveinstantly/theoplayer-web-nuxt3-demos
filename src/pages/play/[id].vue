<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Player from "@/components/Player.vue";

const playerState = usePlayer();
const { id: contentId } = useRoute().params;
const { data, error } = await useFetch<any>(`/api/contents/${contentId}`);
//console.log(useRoute().params);

onMounted(async () => {
  playerState.setPoster(data.value.poster);
  if (data.value.textTracks != undefined) {
    playerState.setTextTracks(data.value.textTracks);
  }
  playerState.setSources(data.value.sources);
  // XXX: Dynamic Import only work in 3.0.0-rc8 or before
  //import(`../../content/player/demos/contents/${contentId}.json`).then(
  //  (module) => {
  //    playerState.setSources(module.default.sources);
  //  }
  //);
});
</script>

<template>
  <v-container>
    <h1 class="pb-5">THEOplayer Player Demo - {{ data.id }}</h1>
    <v-row>
      <v-col cols="12" md="6">
        <Player />
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="5">
          <v-card-title class="text-wrap">{{ data.title }}</v-card-title>
          <v-card-subtitle>{{ data.id }}</v-card-subtitle>
          <v-card-text>{{ data.description }}</v-card-text>
          <v-card-text v-for="(source, index) of data.sources">
            <v-list-item two-line class="pa-0">
              <v-list-item-content>
                <v-list-item-title>Source {{ index }}</v-list-item-title>
                <v-list-item-subtitle>{{ source.src }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pa-5"><v-col><v-divider></v-divider></v-col></v-row>
    <v-row>
      <v-col class="text-right">
        <NuxtLink to="/"><v-btn>Back to Home</v-btn></NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
