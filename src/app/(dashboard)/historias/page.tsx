"use client";

import React from "react";
import { SearchInput } from "./components/SearchInput";
import { HistoriaClinica } from "./components/HistoriaClinica";

const HistoriaPage = () => {
  const handleSearchPaciente = (cedula: string) => {
    console.log("Hola " + cedula);
  };
  return (
    <section className="w-full h-full">
      <h1 className="text-3xl">Historias Clinicas</h1>
      <SearchInput handleSearchInput={handleSearchPaciente} />
      <HistoriaClinica />
    </section>
  );
};

export default HistoriaPage;
