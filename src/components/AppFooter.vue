<script setup lang="ts">
import { ref } from "vue";
defineProps<{ title: string }>();
const opaque = ref("black"); // ref("grey-darken-1");
</script>

<template>
  <v-footer :color="opaque" class="text-center text-subtitle-2" absolute app elevation="0">
    <div class="w-100 text-center">
      <span>
        Copyright &copy; {{ new Date().getFullYear() }} {{ title }}
      </span>
    </div>
  </v-footer>
</template>

<style scoped>
</style>
