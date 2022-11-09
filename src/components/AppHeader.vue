<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  title: String,
  isTransparent: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  // Change v-app-bar background color in scrolling
  window.onscroll = () => {
    if (props.isTransparent == true) {
      onScrollAppBar();
    }
  };
});

// Variables & Functions for Scrolling AppBar
const appBar = ref();
const opaqueColor = "black"; // "grey-darken-1";
let transparentColor = opaqueColor;
if (props.isTransparent == true) {
  transparentColor = "transparent";
}
const appBarBgColor = ref(transparentColor);
function setAppBarBgColorOpaque() {
  appBarBgColor.value = opaqueColor;
}
function setAppBarBgColorTransparent() {
  if (
    document.body.scrollTop <= appBar.value.height &&
    document.documentElement.scrollTop <= appBar.value.height
  ) {
    appBarBgColor.value = transparentColor;
  }
}
function onScrollAppBar() {
  if (
    document.body.scrollTop > appBar.value.height ||
    document.documentElement.scrollTop > appBar.value.height
  ) {
    setAppBarBgColorOpaque();
  } else {
    setAppBarBgColorTransparent();
  }
}
</script>

<template>
  <v-app-bar
    :color="appBarBgColor"
    elevation="0"
    fixed
    ref="appBar"
    @mouseover="setAppBarBgColorOpaque"
    @mouseout="setAppBarBgColorTransparent"
  >
    <v-container fluid class="px-10">
      <v-row align="center" no-gutters>
        <AppLogo></AppLogo>
        <v-toolbar-title class="text-white ps-2">{{ title }}</v-toolbar-title>
      </v-row>
      <v-spacer />
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
