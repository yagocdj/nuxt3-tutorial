// seria uma chamada a uma API em um exemplo real
const logado = true;

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/login" && !logado) {
    return navigateTo('/login');
  }
});
