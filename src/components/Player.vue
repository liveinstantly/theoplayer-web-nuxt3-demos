<script setup lang="ts">
import { ref, onMounted } from "vue";

const theoplayer = ref<HTMLElement | null>(null);
const playerState = usePlayer();

function playerInit() {
  if (theoplayer.value != null) {
    // Initialize player container
    const player = new window.THEOplayer.Player(theoplayer.value, {
      fluid: true,
      libraryLocation: "https://cdn.theoplayer.com/dash/theoplayer/",
    });
    player.source = {};
    // Update sources varibales in playerState (usePlayer)
    watch(playerState.sources, () => {
      player.source = {
        sources: playerState.sources.value,
        textTracks: playerState.textTracks.value,
        poster: playerState.poster.value
      }
    });

  }
}

onMounted(() => {
  playerInit();
});
</script>

<template>
  <div
    class="theoplayer-container video-js theoplayer-skin vjs-16-9 theoplayer"
    ref="theoplayer"
  ></div>
</template>

<style scoped>
.theoplayer-container {
  margin: 0 auto;
  padding-top: 56.25%;
  width: 100%;
}
</style>
