<template>
  <div>
    <Head>
      <Title>Clientes</Title>
      <Meta name="description" content="Teste" />
      <Style type="text/css"> body { background-color: green;}</Style>
    </Head>
    <h1 class="text-5xl text-center my-4">Clientes</h1>
    {{ status }}
    <button
      @click="refresh"
      class="px-4 py-2 bg-green-400 shadow-md rounded-md"
    >
      Recarregar
    </button>
    <div v-if="pending">Carregando..</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div class="shadow-md px-4 py-2" v-for="c in clientes" :key="c.id">
        <img class="rounded-full mx-auto" :src="c.foto" />
        <h3 class="text-2xl text-center">{{ c.nome }}</h3>
      </div>
    </div>

    <div class="flex gap-2">
      <button
        v-for="i in 2"
        :key="n"
        class="px-2 bg-slate-400"
        @click="irPagina(i)"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script setup>
const pagina = ref(1);

definePageMeta({
  pageTransition: {
    name: "slide",
  },
});

const {
  data: clientes,
  pending,
  error,
  refresh,
  // execute,
  status,
} = useLazyFetch("https://reqres.in/api/users", {
  // server: false,
  // pick: ["page", "data"],
  transform: (clientes) => {
    return clientes.data.map((p) => ({
      id: p.id,
      nome: p.first_name,
      sobrenome: p.last_name,
      foto: p.avatar,
    }));
  },
  // watch: [pagina],
  query: {
    // passando na query da request o parâmetro page
    page: pagina,
  },
});
// useLazyFetch(URL) é a mesma coisa de usar useFetch(URL, {lazy: true})

const { data: cliente } = await useAsyncData("cliente", async () => {
  const [pessoas, aleatorios] = await Promise.all([
    $fetch("https://reqres.in/api/users"),
    $fetch("https://reqres.in/api/unknown"),
  ]);

  return { pessoas, aleatorios };
});

console.log(cliente.value.pessoas);
console.log(cliente.value.aleatorios);

const irPagina = (numeroPagina) => {
  pagina.value = numeroPagina;
};
</script>
