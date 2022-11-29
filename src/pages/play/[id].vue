<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Player from "@/components/Player.vue";

const { id: contentId } = useRoute().params;
const playerState = usePlayer();

const { data: asset } = await useAsyncData("asset", async () => {
  const { data, error } = await useFetch<any>(`/api/contents/${contentId}`, {
    initialCache: false,
  });
  if (error.value == null) {
    return data.value;
  } else {
    return null;
  }
});

onMounted(async () => {
  playerState.setPoster(asset.value.poster);
  if (asset.value.textTracks != undefined) {
    playerState.setTextTracks(asset.value.textTracks);
  }
  if (asset.value.vr != undefined) {
    playerState.setVR(asset.value.vr);
  }
  playerState.setSources(asset.value.sources);
});
</script>

<template>
  <v-container v-if="asset">
    <h1 class="pb-5">THEOplayer Player Demo - {{ asset.id }}</h1>
    <v-row>
      <v-col cols="12" md="6">
        <Player />
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="5">
          <v-card-title class="text-wrap">{{ asset.title }}</v-card-title>
          <v-card-subtitle>{{ asset.id }}</v-card-subtitle>
          <v-card-text>{{ asset.description }}</v-card-text>
          <v-card-text v-for="(source, index) of asset.sources">
            <v-list lines="two" class="pa-0">
              <v-list-item
                class="pa-0"
                :title="`Source ${index}`"
                :subtitle="source.src"
              ></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pa-5"
      ><v-col><v-divider></v-divider></v-col
    ></v-row>
    <v-row>
      <v-col class="text-right">
        <NuxtLink to="/"><v-btn>Back to Home</v-btn></NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <h1 class="pb-5">THEOplayer Player Demo - No asset data</h1>
  </v-container>
</template>
