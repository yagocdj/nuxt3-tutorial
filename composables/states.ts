import type { Video } from "~/interfaces/video";

// Torna-se um global ref (um estado global)
export const useFavoritos = () => useState<Video[]>("favoritos", () => []);