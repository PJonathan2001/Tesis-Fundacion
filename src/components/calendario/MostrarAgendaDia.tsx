import { citas } from "@/constants/fechas";
import { Cita } from "@/types/cita.types";

interface Props {
  fechaActual: Date;
  setCitaSeleccionada: (cita: Cita) => void;
}

export const MostrarAgendaDia: React.FC<Props> = ({
  fechaActual,
  setCitaSeleccionada,
}) => {
  const citasDelDia = citas.filter(
    (cita) => cita.fecha.toDateString() === fechaActual.toDateString()
  );

  return (
    <div className="grid grid-cols-1 gap-2 h-[calc(100vh-150px)] overflow-y-auto">
      {Array.from({ length: 24 }).map((_, hora) => (
        <div key={hora} className="flex items-center border-t">
          <div className="w-16 text-right pr-2 text-sm text-gray-500">
            {hora}:00
          </div>
          <div className="flex-grow h-12 relative">
            {citasDelDia
              .filter((cita) => cita.fecha.getHours() === hora)
              .map((cita) => (
                <div
                  key={cita.id}
                  className="absolute left-0 right-0 bg-black text-white rounded-lg shadow-md p-2 text-xs cursor-pointer hover:z-20 mx-2"
                  style={{
                    top: `${(cita.fecha.getMinutes() / 60) * 100}%`,
                    height: `${(cita.duracion / 60) * 100}%`,
                  }}
                  onClick={() => setCitaSeleccionada(cita)}
                >
                  {cita.titulo}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
