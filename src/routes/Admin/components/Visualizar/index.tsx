import React from 'react';
import VisualizarPaciente from './Paciente';
import VisualizarAluno from './Aluno';
import VisualizarProfessor from './Professor';
import VisualizarSecretario from './Secretario';

type UserProps = {
  type: string;
  userData: any;
};

const Visualizar: React.FC<UserProps> = ({ type, userData }) => {
  return (
    <>
      {type === 'paciente' && <VisualizarPaciente userData={userData} />}
      {type === 'aluno' && <VisualizarAluno userData={userData} />}
      {type === 'secretario' && <VisualizarSecretario userData={userData} />}
      {type === 'professor' && <VisualizarProfessor userData={userData} />}
    </>
  );
};

export default Visualizar;
