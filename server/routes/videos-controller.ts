import { Video } from "~/interfaces/video";

export default defineEventHandler(() => {
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

  return {
    videos: videos,
  }
});