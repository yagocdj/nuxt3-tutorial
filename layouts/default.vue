<template>
  <select v-model="locale">
      <option value="pt">pt</option>
      <option value="en">en</option>
    </select>
  <div>
    Layout padrão
    <slot></slot>
    Rodapé padrão
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
