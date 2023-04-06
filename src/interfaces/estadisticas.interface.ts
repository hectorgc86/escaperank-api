export interface Estadisticas {
  numPartidas?: object | null;
  tiempos?: object | null;
  rankings?: object | null;
}
interface Ranking {
  sala: string;
  id: string;
  companyia_id: string;
  tiempos: {
    equipo: string;
    fecha: string;
    tiempo: string;
  }[];
}
interface OldRanking {
  sala: string;
  id: string;
  companyia_id: string;
  equipo: string;
  fecha: string;
  tiempo: string;
}