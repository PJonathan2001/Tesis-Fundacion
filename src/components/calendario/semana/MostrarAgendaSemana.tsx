import { FC } from "react";
import { diasSemana, horasDia, citas } from "@/constants/fechas";
import { Cita } from "@/types/cita.types";
import DiaAgenda from "./DiaAgenda";
interface Props {
  fechaActual: Date;
  setCitaSeleccionada: (cita: Cita) => void;
}

export const MostrarAgendaSemana: FC<Props> = ({
  fechaActual,
  setCitaSeleccionada,
}) => {
  const inicioSemana = new Date(fechaActual);
  inicioSemana.setDate(fechaActual.getDate() - fechaActual.getDay() + 1); // Comenzar desde el lunes

  return (
    <div className="overflow-x-auto h-[calc(100vh-135px)] w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-100 w-20"></th>
            {diasSemana.map((dia, index) => {
              const fechaDia = new Date(inicioSemana);
              fechaDia.setDate(inicioSemana.getDate() + index);
              return (
                <th key={dia} className="border p-2 bg-gray-100">
                  <div>{dia}</div>
                  <div className="text-sm">
                    {fechaDia.getDate()}/{fechaDia.getMonth() + 1}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {horasDia.map((hora: number) => (
            <tr key={hora}>
              <td className="border p-2 text-right text-sm font-medium">
                {hora}:00
              </td>
              {diasSemana.map((_, diaIndex) => (
                <DiaAgenda
                  key={diaIndex}
                  diaIndex={diaIndex}
                  hora={hora}
                  inicioSemana={inicioSemana}
                  citas={citas}
                  setCitaSeleccionada={setCitaSeleccionada}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
