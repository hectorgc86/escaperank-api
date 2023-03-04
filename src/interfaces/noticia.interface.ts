import { Companyia } from "./companyia.interface";
import { Equipo } from "./equipo.interface";
import { Usuario } from "./usuario.interface";

export interface Noticia {
  id?: number;
  fecha?: string;
  titular?: string | null;
  textoCorto?: string | null;
  textoLargo?: string | null;
  imagen?: string | null;
  link?: string | null;
  promocionada?: boolean | null;
  numeroFavoritos?: number | null;
  numeroComentarios?: number | null;
  companyiaId?: string | null;
  usuarioId?: number | null;
  equipoId?: number | null;
  companyia?: Companyia;
  usuario?: Usuario;
  equipo?: Equipo;
}
