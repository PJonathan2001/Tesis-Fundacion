"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MostrarAgendaSemana } from "@/components/calendario/semana/MostrarAgendaSemana";
import { Cita } from "@/types/cita.types";
import { MostrarAgendaDia } from "@/components/calendario/MostrarAgendaDia";
import { MostrarAgendaMes } from "@/components/calendario/MostrarAgendaMes";

// Datos de ejemplo para las citas

export default function Calendario() {
  const [vista, setVista] = useState("semana");
  const [fechaActual, setFechaActual] = useState(new Date());
  const [citaSeleccionada, setCitaSeleccionada] = useState<Cita | null>(null);

  const cambiarFecha = (cantidad: number) => {
    const nuevaFecha = new Date(fechaActual);
    if (vista === "dia") {
      nuevaFecha.setDate(fechaActual.getDate() + cantidad);
    } else if (vista === "semana") {
      nuevaFecha.setDate(fechaActual.getDate() + cantidad * 7);
      // El formato de la fecha es dd/mm/yyyy
    } else {
      nuevaFecha.setMonth(fechaActual.getMonth() + cantidad);
    }

    setFechaActual(nuevaFecha);
  };

  return (
    <main className="flex-1 ">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Calendario de Citas Médicas</h1>
        <div className="flex items-center space-x-4">
          <Button onClick={() => cambiarFecha(-1)}>
            <ChevronLeft />
          </Button>
          <span className="font-semibold">
            {vista === "dia" && fechaActual.toLocaleDateString("ES-es")}
            {vista === "semana" &&
              `Semana del ${fechaActual.toLocaleDateString("ES-es")}`}
            {vista === "mes" &&
              fechaActual.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
          </span>
          <Button onClick={() => cambiarFecha(1)}>
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={vista} onValueChange={setVista}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Seleccionar vista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dia">Día</SelectItem>
              <SelectItem value="semana">Semana</SelectItem>
              <SelectItem value="mes">Mes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardContent className="p-2">
          {vista === "dia" && (
            <MostrarAgendaDia
              fechaActual={fechaActual}
              setCitaSeleccionada={setCitaSeleccionada}
            />
          )}
          {vista === "semana" && (
            <MostrarAgendaSemana
              fechaActual={fechaActual}
              setCitaSeleccionada={setCitaSeleccionada}
            />
          )}
          {vista === "mes" && <MostrarAgendaMes fechaActual={fechaActual} />}
        </CardContent>
      </Card>

      {citaSeleccionada && (
        <Dialog
          open={!!citaSeleccionada}
          onOpenChange={() => setCitaSeleccionada(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalles de la Cita Médica</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <p>
                <strong>Título:</strong> {citaSeleccionada.titulo || "-"}
              </p>
              <p>
                <strong>Fecha:</strong>{" "}
                {citaSeleccionada.fecha.toLocaleDateString("ES-es")}
              </p>
              <p>
                <strong>Hora:</strong>{" "}
                {citaSeleccionada.fecha.toLocaleTimeString()}
              </p>
              <p>
                <strong>Duración:</strong> {citaSeleccionada.duracion} minutos
              </p>
            </div>
            <Button onClick={() => setCitaSeleccionada(null)}>Cerrar</Button>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
