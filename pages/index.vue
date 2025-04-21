<template>
  <div>
    <div class="text-5xl text-center">Página inicial</div>
  </div>
</template>

<script setup>
const tituloSite = "Pablo Codes - Tutoriais";

useHead({
  title: tituloSite,
  meta: [
    {
      name: "description",
      content: "Site de tutorias de VueJS/NuxtJS",
    },
  ],
});</script>
