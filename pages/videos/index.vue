<template>
  <div>vídeos</div>

  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  <div class="videos">
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <div>
        <button @click="adicionarFavorito(video)">Adicionar favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '~/interfaces/video';

const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success("Toast adicionado com sucesso!");
});

// const favoritos = useFavoritos();
const { adicionarFavorito } = useVideoStore();

const videos: Video[] = [
  {
    id: 1,
    descricao: "01 - Introdução e instalação",
    url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=wpSMNY8_K9uyFloc",
    data_postagem: "2023-10-15",
  },
  {
    id: 2,
    descricao: "02 - Configuração",
    url: "https://www.youtube.com/embed/JbbB84bnPog?si=wgwx_ry6-JJBGqbL",
    data_postagem: "2023-10-13",
  },
  {
    id: 3,
    descricao: "03 - Pages",
    url: "https://www.youtube.com/embed/S99sVicr8NI?si=1SUc4AXZn7ii3956",
    data_postagem: "2023-10-10",
  },
  {
    id: 4,
    descricao: "04 - Components",
    url: "https://www.youtube.com/embed/cCHWanw49l8?si=mYvY1-g46-lAIPh8",
    data_postagem: "2023-10-05",
  },
]

// const adicionaFavorito = (video: Video) => {
//   favoritos.value.push(video);
// };
  
</script>

<style scoped>
  .videos {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .videos button {
    display: inline-block;
  }
</style>
