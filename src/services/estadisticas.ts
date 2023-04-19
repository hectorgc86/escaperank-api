import { QueryTypes } from "sequelize";
import { Estadisticas } from "../interfaces/estadisticas.interface";
import { PartidaModel } from "../models/partida";
import { Ranking } from "../interfaces/estadisticas.interface";
import { OldRanking } from "../interfaces/estadisticas.interface";

const obtenerEstadisticasCompanyia = async (idCompanyia: string) => {
  const response: Estadisticas = {
    numPartidas: await obtenerNumPartidasCompanyia(idCompanyia),
    tiempos: await obtenerTiemposCompanyia(idCompanyia),
    rankings: await obtenerRankingCompanyia(idCompanyia),
    partidasMes: await obtenerNumPartidasMesCompanyia(idCompanyia),
  };
  return response;
};

const obtenerEstadisticasSala = async (idSala: string) => {
  const response: Estadisticas = {
    numPartidas: await obtenerNumPartidasSala(idSala),
    partidasMes: await obtenerNumPartidasMesSala(idSala),
    tiempos: await obtenerTiemposSala(idSala),
    rankings: await obtenerRankingSala(idSala),
  };
  return response;
};

const obtenerNumPartidasMesCompanyia = async (idCompanyia: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT s.nombre AS nombre_sala, YEAR(p.fecha) AS anio, MONTH(p.fecha) AS mes, COUNT(*) AS cantidad_partidas FROM  partidas p JOIN salas s ON p.sala_id = s.id WHERE  s.companyia_id = :idCompanyia GROUP BY s.nombre, anio, mes ORDER BY anio ASC, mes ASC",
    {
      replacements: { idCompanyia: idCompanyia },
      type: QueryTypes.SELECT,
    }
  );

  return records;
};

const obtenerNumPartidasMesSala = async (idSala: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT s.nombre AS nombre_sala, YEAR(p.fecha) AS anio, MONTH(p.fecha) AS mes, COUNT(*) AS cantidad_partidas FROM  partidas p JOIN salas s ON p.sala_id = s.id WHERE  s.id = :idSala GROUP BY s.nombre, anio, mes ORDER BY anio ASC, mes ASC",
    {
      replacements: { idSala: idSala },
      type: QueryTypes.SELECT,
    }
  );

  return records;
};

const obtenerNumPartidasCompanyia = async (idCompanyia: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT salas.nombre,salas.companyia_id, partidas.sala_id,count(partidas.sala_id) as numPartidas FROM partidas, salas WHERE partidas.sala_id=salas.id group by salas.nombre,partidas.sala_id,salas.companyia_id HAVING salas.companyia_id=:idCompanyia",
    {
      replacements: { idCompanyia: idCompanyia },
      type: QueryTypes.SELECT,
    }
  );

  return records;
};

const obtenerTiemposCompanyia = async (idCompanyia: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT s.nombre, TIME_FORMAT(SEC_TO_TIME(p.minutos * 60 + p.segundos), '%i:%s') AS partida_mas_larga, TIME_FORMAT(SEC_TO_TIME(p2.min_tiempo), '%i:%s') AS partida_mas_corta, TIME_FORMAT(SEC_TO_TIME(CEILING(p2.avg_tiempo)), '%i:%s') AS tiempo_promedio FROM partidas p, salas s, (SELECT sala_id, MIN(minutos * 60 + segundos) AS min_tiempo, AVG(minutos * 60 + segundos) AS avg_tiempo FROM partidas GROUP BY sala_id) p2 WHERE p.sala_id = p2.sala_id AND s.id = p.sala_id AND s.companyia_id = :idCompanyia AND (p.minutos * 60 + p.segundos) IN (SELECT MAX(minutos * 60 + segundos) FROM partidas WHERE sala_id = p.sala_id)",
    {
      replacements: { idCompanyia: idCompanyia },
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

const obtenerRankingCompanyia = async (idCompanyia: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT s.nombre AS sala, s.id, s.companyia_id, e.nombre AS equipo, DATE_FORMAT(p.fecha, '%d/%m/%Y') AS fecha,TIME_FORMAT(SEC_TO_TIME(p.minutos * 60 + p.segundos), '%i:%s') AS tiempo FROM partidas p, salas s, equipos e WHERE p.sala_id = s.id AND e.id = p.equipo_id  AND s.companyia_id = :idCompanyia ORDER BY tiempo ASC",
    {
      replacements: { idCompanyia: idCompanyia },
      type: QueryTypes.SELECT,
    }
  );

  const rank = groupBySala(records as OldRanking[]);

  return rank;
};

const obtenerNumPartidasSala = async (idSala: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT salas.nombre,salas.companyia_id, partidas.sala_id,count(partidas.sala_id) as numPartidas FROM partidas, salas WHERE partidas.sala_id=salas.id group by salas.nombre,partidas.sala_id,salas.companyia_id HAVING partidas.sala_id=:idSala",
    {
      replacements: { idSala: idSala },
      type: QueryTypes.SELECT,
    }
  );

  return records;
};
const obtenerTiemposSala = async (idSala: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT s.nombre, TIME_FORMAT(SEC_TO_TIME(p.minutos * 60 + p.segundos), '%i:%s') AS partida_mas_larga, TIME_FORMAT(SEC_TO_TIME(p2.min_tiempo), '%i:%s') AS partida_mas_corta, TIME_FORMAT(SEC_TO_TIME(CEILING(p2.avg_tiempo)), '%i:%s') AS tiempo_promedio FROM partidas p, salas s, (SELECT sala_id, MIN(minutos * 60 + segundos) AS min_tiempo, AVG(minutos * 60 + segundos) AS avg_tiempo FROM partidas GROUP BY sala_id) p2 WHERE p.sala_id = p2.sala_id AND s.id = p.sala_id AND p.sala_id =:idSala AND (p.minutos * 60 + p.segundos) IN (SELECT MAX(minutos * 60 + segundos) FROM partidas WHERE sala_id = p.sala_id)",
    {
      replacements: { idSala: idSala },
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

const obtenerRankingSala = async (idSala: string) => {
  const records = await PartidaModel.sequelize?.query(
    "SELECT DISTINCT s.nombre AS sala, s.id, s.companyia_id, e.nombre AS equipo, DATE_FORMAT(p.fecha, '%d/%m/%Y') AS fecha,  TIME_FORMAT(SEC_TO_TIME(p.minutos * 60 + p.segundos), '%i:%s') AS tiempo FROM partidas p, salas s, equipos e WHERE p.sala_id = s.id AND p.equipo_id = e.id  AND s.id = :idSala ORDER BY tiempo ASC",
    {
      replacements: { idSala: idSala },
      type: QueryTypes.SELECT,
    }
  );

  const rank = groupBySala(records as OldRanking[]);

  return rank[0];
};

function groupBySala(rankings: OldRanking[]): Ranking[] {
  const salas: Record<string, Ranking> = {};

  for (const oldRanking of rankings) {
    const { sala, id, companyia_id, equipo, fecha, tiempo } = oldRanking;

    if (!salas[sala]) {
      salas[sala] = {
        sala,
        id,
        companyia_id,
        tiempos: [],
      };
    }

    salas[sala].tiempos.push({ equipo, fecha, tiempo });
  }

  for (const sala of Object.values(salas)) {
    sala.tiempos.sort((a, b) => {
      const tiempoA = parseTiempo(a.tiempo);
      const tiempoB = parseTiempo(b.tiempo);

      if (tiempoA < tiempoB) {
        return -1;
      } else if (tiempoA > tiempoB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return Object.values(salas);
}

function parseTiempo(tiempo: string): number {
  const [minutos, segundos] = tiempo.split(":");
  return parseInt(minutos) * 60 + parseInt(segundos);
}
export {
  obtenerEstadisticasCompanyia,
  obtenerEstadisticasSala,
  obtenerRankingSala,
};
