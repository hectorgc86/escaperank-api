import { Request } from "express";
import { CompanyiaRequest } from "./companyia.interface";
import { UsuarioRequest } from "./usuario.interface";

export interface Registro {
  usuarioId?: string | null;
  companyiaId?: string | null;
}

export interface RegistroRequest extends Request {
  usuario?: UsuarioRequest;
  companyia?: CompanyiaRequest;
  ciudad?: string;
  provincia?: string;
}
