import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "@/components/ui";

import { Plus } from "lucide-react";
import { Cita } from "@/types/cita.types";

export const NuevaCita = () => {
  const [nuevaCita, setNuevaCita] = useState<Cita>({
    id: 0,
    titulo: "",
    fecha: new Date(),
    duracion: 2,
    hora: "",
  });
  const handleNuevaCita = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la nueva cita
    console.log("Nueva cita:", nuevaCita);
    // Resetear el formulario
    setNuevaCita({
      titulo: "",
      fecha: new Date(),
      hora: "",
      duracion: 2,
      id: 0,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nueva Cita
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Nueva Cita Médica</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleNuevaCita} className="space-y-4">
          <div>
            <Label htmlFor="titulo">Título</Label>
            <Input
              id="titulo"
              value={nuevaCita.titulo}
              onChange={(e) =>
                setNuevaCita({ ...nuevaCita, titulo: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="fecha">Fecha</Label>
            <Input
              id="fecha"
              type="date"
              value={nuevaCita.fecha.toLocaleDateString()}
              onChange={(e) =>
                setNuevaCita({
                  ...nuevaCita,
                  fecha: new Date(e.target.value),
                })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="hora">Hora</Label>
            <Input
              id="hora"
              type="time"
              value={nuevaCita.hora}
              onChange={(e) =>
                setNuevaCita({ ...nuevaCita, hora: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="duracion">Duración (minutos)</Label>
            <Input
              id="duracion"
              type="number"
              value={nuevaCita.duracion}
              onChange={(e) =>
                setNuevaCita({
                  ...nuevaCita,
                  duracion: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <Button type="submit">Guardar Cita</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
