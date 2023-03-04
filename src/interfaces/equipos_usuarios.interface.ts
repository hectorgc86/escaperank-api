import { Equipo } from "./equipo.interface";
import { Usuario } from "./usuario.interface";

export interface EquiposUsuarios {
  equipoId?: number;
  usuarioId?: number;
  equipo?: Equipo;
  usuario?: Usuario;
}
