<template>
  <div>vídeos favoritos</div>

  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <div>
        <button @click="videoStore.deletarFavorito(video.id)">Remover favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);


// const favoritos = useFavoritos();

// const deletarFavorito = (id: number) => {
//   const favoritosFiltrados = favoritos.value.filter(
//     (favorito) => favorito.id !== id
//   );
//   favoritos.value = favoritosFiltrados;
// };
</script>

<style lang="scss" scoped></style>
