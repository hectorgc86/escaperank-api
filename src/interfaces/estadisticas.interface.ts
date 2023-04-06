export interface Estadisticas {
  numPartidas?: object | null;
  tiempos?: object | null;
  rankings?: object | null;
  partidasMes?:object| null;
}
export interface Ranking {
  sala: string;
  id: string;
  companyia_id: string;
  tiempos: {
    equipo: string;
    fecha: string;
    tiempo: string;
  }[];
}
export interface OldRanking {
  sala: string;
  id: string;
  companyia_id: string;
  equipo: string;
  fecha: string;
  tiempo: string;
}