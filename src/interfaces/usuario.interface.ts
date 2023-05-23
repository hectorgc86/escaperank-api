import { Login } from "./login.interface";
import { EquiposUsuarios } from "./equipos_usuarios.interface";
import { Estado } from "./estado.interface";
import { Noticia } from "./noticia.interface";
import { Perfil } from "./perfil.interface";
import { UsuariosAmigos } from "./usuarios_amigos.interface";

export interface Usuario extends Login {
  id?: number;
  nick?: string | null;
  email?: string | null;
  contrasenya?: string | null;
  rol?: string;
  activado?: boolean;
  perfil?: Perfil;
  equiposUsuarios?: EquiposUsuarios[] | null;
  noticias?: Noticia[] | null;
  usuariosAmigos?: UsuariosAmigos[] | null;
}

export interface UsuarioRequest {
  nick?: string | null;
  contrasenya?: string | null;
  email?: string | null;
  nombre?: string | null;
  telefono?: string | null;
  nacido?: string | null;
  avatar?: string | null;
  avatarBase64?: string | null;
}

export interface Amigo extends Usuario {
  estado?: Estado;
  amigosComun?: number;
}
