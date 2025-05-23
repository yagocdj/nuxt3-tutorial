import { pt } from "./pt.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    pt,
    en: {
      titulo: "My videos",
      tituloFavorito: "My favorites"
    },
  },
}));