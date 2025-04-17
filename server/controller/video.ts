import { Video } from "~/interfaces/video"
import { postgresClient } from "../utils";
import { H3Event } from "h3";

const { client } = postgresClient();

export const buscaVideos = async () => {
  const resultado = await client.query('SELECT * FROM videos ORDER BY descricao');

  return resultado.rows as Video[];
}

export const buscaVideoPorId = async (event: H3Event) => {
  const requestId = (await event.context.params?.id) as string;
  const resultado = await client.query('SELECT * FROM videos WHERE id = $1', [requestId]);

  return resultado.rows[0] as Video;
}

export const adicionaVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);

    await client.query(
      'INSERT INTO videos (descricao, url, data_postagem) VALUES ($1, $2, current_date)',
      [request.descricao, request.url]
    );
    return "Vídeo adicionado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao adicionar vídeo',
    })
  }
}

export const atualizaVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);

    await client.query(
      'UPDATE videos SET descricao = $1, url = $2, data_postagem = CURRENT_DATE WHERE id = $3',
      [request.descricao, request.url, request.id]
    );
    return "Vídeo atualizado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao atualizar vídeo',
    })
  }
}

export const deletaVideo = async (event: H3Event) => {
  try {
    const requestId = (await event.context.params?.id) as string;
    const resultado = await client.query(
      'DELETE FROM videos WHERE id = $1',
      [requestId]
    );
  
    return "Video deletado com sucesso!";

  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao deletar vídeo',
    })
  }
}
