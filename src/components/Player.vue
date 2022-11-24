<script setup lang="ts">
import { ref, onMounted } from "vue";

const theoplayer = ref<HTMLElement | null>(null);
const playerState = usePlayer();
const config = useRuntimeConfig();

function playerInit() {
  const subscriberId = "anonymous";
  const subscriberType = "freemium";
  if (theoplayer.value != null) {
    // Initialize player container
    const player = new window.THEOplayer.Player(theoplayer.value, {
      fluid: true,
      libraryLocation: "https://cdn.myth.theoplayer.com/f6fe7854-1374-4637-b68e-9c43b13f739b/",
      license: config.public.theoplayer.license
    });
    var theoPlugin = new mmTheoJSAdapter();
    if (theoPlugin.getRegistrationStatus() === false) {
      theoPlugin.registerMMSmartStreaming("theoplayer.demo.liveinstantly.cloud", "17313401890", subscriberId, "demo.liveinstantly.cloud", subscriberType, "subscriber_tag");
      theoPlugin.reportPlayerInfo("liveinstantly_theo_player_brand", "liveinstantly_theo_player_model", "4.3.0");
    }
    theoPlugin.initialize(player);

    player.source = {};
    // Update sources varibales in playerState (usePlayer)
    watch(playerState.sources, () => {
      player.source = {
        sources: playerState.sources.value,
        textTracks: playerState.textTracks.value,
        vr: playerState.vr.value,
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
