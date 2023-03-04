export interface Login {
  usuarioId?: string | null;
  tipoToken?: string | null;
  expiraEn?: string | null;
  tokenAcceso?: string | null;
}

export interface LoginRequest {
  usuario?: string | null;
  contrasenya?: string | null;
  token?: string | null;
}
