"use client";

import React from "react";
import { ReporteInputRangeDate } from "./components/ReporteInputRangeDate";

const ReporteHistorias = () => {
  return (
    <section className="w-full h-full">
      <h1 className="text-3xl">Reporte de Historias Clinicas</h1>
      <ReporteInputRangeDate />
    </section>
  );
};

export default ReporteHistorias;
