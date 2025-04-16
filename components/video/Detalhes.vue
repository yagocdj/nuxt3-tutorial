<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao()

const dataVideo = new Date(2025, 3, 2);

diasPassados(dataVideo);
</script>

<template>
  <h1>Components - Nuxt 3</h1>
  <p>Autor: Pablo Codes</p>
  <p>{{ diferencaEmDias }} dias atrás</p>
</template>