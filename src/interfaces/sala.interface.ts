import { Categoria } from "./categoria.interface";
import { Companyia } from "./companyia.interface";
import { Dificultad } from "./dificultad.interface";
import { Partida } from "./partida.interface";
import { Publico } from "./publico.interface";
import { Tematica } from "./tematica.interface";
import { Valoracion } from "./valoracion.interface";

export interface Sala {
  id?: string | null;
  nombre?: string | null;
  promocionada?: boolean;
  duracion?: string | null;
  minimoJugadores?: number | null;
  maximoJugadores?: number | null;
  precioMinimo?: string | null;
  descripcion?: string | null;
  precioMaximo?: string | null;
  urlReserva?: string | null;
  edadPublico?: string | null;
  proximamente?: string | null;
  visto?: string | null;
  modoCombate?: string | null;
  textoCombate?: string | null;
  salaIgual?: string | null;
  enOferta?: string | null;
  textoOferta?: string | null;
  numeroResenyas?: string | null;
  regaloBonus?: string | null;
  disponibleIngles?: string | null;
  adaptadoMinusvalidos?: string | null;
  adaptadoCiegos?: string | null;
  adaptadoSordos?: string | null;
  adaptadoEmbarazadas?: string | null;
  noClaustrofobicos?: string | null;
  imagenAncha?: string | null;
  imagenEstrecha?: string | null;
  jugadoresIncluidos?: string | null;
  precioJugadorAdicional?: string | null;
  validez?: string | null;
  comoReservar?: string | null;
  terminosReserva?: string | null;
  otrosDatos?: string | null;
  companyiaId?: string | null;
  dificultadId?: string | null;
  companyia?: Companyia;
  dificultad?: Dificultad;
  partidas?: Partida[] | null;
  valoraciones?: Valoracion[] | null;
  categorias?: Categoria[] | null;
  publico?: Publico[] | null;
  tematicas?: Tematica[] | null;
  desactivada?: boolean;

}
