import { FC } from "react";
import { Cita } from "@/types/cita.types";
import CitaItem from "./CitaItem";

interface Props {
  diaIndex: number;
  hora: number;
  inicioSemana: Date;
  citas: Cita[];
  setCitaSeleccionada: (cita: Cita) => void;
}

const DiaAgenda: FC<Props> = ({
  diaIndex,
  hora,
  inicioSemana,
  citas,
  setCitaSeleccionada,
}) => {
  const fechaHora = new Date(inicioSemana);
  fechaHora.setDate(inicioSemana.getDate() + diaIndex);
  fechaHora.setHours(hora, 0, 0, 0);

  const citasEnEstaHora = citas.filter(
    (cita) =>
      cita.fecha.getDate() === fechaHora.getDate() &&
      cita.fecha.getMonth() === fechaHora.getMonth() &&
      cita.fecha.getFullYear() === fechaHora.getFullYear() &&
      cita.fecha.getHours() === hora
  );

  return (
    <td className="border p-2 relative h-20">
      {citasEnEstaHora.map((cita) => (
        <CitaItem
          key={cita.id}
          cita={cita}
          setCitaSeleccionada={setCitaSeleccionada}
        />
      ))}
    </td>
  );
};

export default DiaAgenda;
