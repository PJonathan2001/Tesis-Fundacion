interface Props {
  fechaActual: Date;
}

export const MostrarAgendaMes: React.FC<Props> = ({ fechaActual }) => {
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();
  return `Mes ${mes} de ${anio}`;
};
