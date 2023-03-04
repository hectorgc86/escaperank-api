import { EquiposUsuarios } from "./equipos_usuarios.interface";
import { Noticia } from "./noticia.interface";
import { Partida } from "./partida.interface";
import { Usuario } from "./usuario.interface";

export interface Equipo {
  id?: number;
  nombre?: string | null;
  avatar?: string | null;
  activado?: boolean;
  equiposUsuarios?: EquiposUsuarios[] | null;
  partidas?: Partida[] | null;
  noticias?: Noticia[] | null;
}

export interface EquipoRequest {
  nombre?: string | null;
  usuarios?: Usuario[] | null;
  activado?: boolean;
}
