<template>
  <div>
    <div>
      <UButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="primary"
        variant="solid"
        label="Editar"
        :trailing="false"
        @click="abrirModal"
      />

      <UModal v-model:open="isOpen">
        <template #content>
          <div class="p-4">
            <UForm
              :validate="validate"
              :state="state"
              class="space-y-4"
              @submit="onSubmit"
            >
              <UFormField label="descricao" name="descricao">
                <UInput v-model="state.descricao" />
              </UFormField>

              <UFormField label="url" name="url">
                <UInput v-model="state.url" type="url" />
              </UFormField>

              <UButton type="submit"> Enviar </UButton>
            </UForm>
          </div>
        </template>
      </UModal>
    </div>

    <UCard class="w-[800px] justify-center">
      <template #header>
        {{ video?.descricao }}
      </template>

      <iframe
        class="h-[500px] w-full"
        :src="video?.url"
        title="YouTube video player"
        frameborder="0"
      />
    </UCard>
    <UButton
      icon="i-heroicons-pencil-square"
      size="sm"
      variant="solid"
      label="Deletar"
      :trailing="false"
      @click="deletarVideo"
    />
  </div>
</template>

<script setup lang="ts">
import { type Video } from "~/interfaces/video";
import type { FormError, FormSubmitEvent } from "#ui/types";
const isOpen = ref(false);

// definePageMeta({
//   layout: "exibicao",
//   middleware: ["video", "auth"]
// });

const route = useRoute();
const { id } = route.params;

const { data: video } = await useFetch<Video>(`/api/v1/videos/${id}`);

useSeoMeta({
  title: "Nuxt 3 SEO META",
  ogDescription: video.value?.descricao || "",
  ogUrl: video.value?.url || "",
  ogType: "video.other",
});

if (!video.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Vídeo não encontrado",
  });
}

const router = useRouter();
const { $toast } = useNuxtApp();

const state = reactive({
  id: 0,
  descricao: "",
  url: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.descricao) errors.push({ path: "descricao", message: "Required" });
  if (!state.url) errors.push({ path: "url", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "PUT",
      body: state,
    });
    router.push("/videos");
    $toast.success("Vídeo atualizado com sucesso!");
    isOpen.value = false;
  } catch (error) {
    $toast.error("Erro ao atualizado o vídeo");
  }
}

const abrirModal = () => {
  state.descricao = video.value?.descricao || "";
  state.url = video.value?.url || "";
  state.id = video.value?.id || 0;
  isOpen.value = true;
};

const deletarVideo = async () => {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "DELETE",
    });
    router.push("/videos");
    $toast.success("Vídeo deletado com sucesso!");
  } catch (error) {
    $toast.error("Erro ao deletado o vídeo");
  }
};
</script>

<style lang="scss" scoped></style>
