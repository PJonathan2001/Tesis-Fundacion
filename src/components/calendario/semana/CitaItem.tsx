import { FC } from "react";
import { Cita } from "@/types/cita.types";

interface Props {
  cita: Cita;
  setCitaSeleccionada: (cita: Cita) => void;
}

const CitaItem: FC<Props> = ({ cita, setCitaSeleccionada }) => (
  <div
    className="absolute left-0 right-0 bg-black text-white rounded-lg shadow-md p-2 text-xs cursor-pointer hover:bg-slate-800 transition-all duration-200 ease-in-out hover:z-20"
    style={{
      top: `${(cita.fecha.getMinutes() / 60) * 100}%`,
      height: `${(cita.duracion / 60) * 100}%`,
      minHeight: "30px",
      zIndex: 10, // Eleva las citas en la misma hora para evitar superposición
    }}
    onClick={() => setCitaSeleccionada(cita)}
  >
    <div className="font-bold text-sm">{cita.titulo}</div>
  </div>
);

export default CitaItem;
