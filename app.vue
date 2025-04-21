<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
        <!-- Posso adicionar transições no próprio componente -->
        <!-- <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" /> -->
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
