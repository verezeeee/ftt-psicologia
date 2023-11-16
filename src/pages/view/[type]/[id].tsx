import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Visualizar from "../../../routes/Admin/components/Visualizar";

export default function VisualizarUsuario() {
  const router = useRouter();
  const { type, id } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        let response;
        if (type === "secretario") {
          response = await axios.get(`http://localhost:8080/auth/getSecretarioById/${id}`);
        } else if (type === "aluno") {
          response = await axios.get(`http://localhost:8080/auth/getAlunoById/${id}`);
        } else if (type === "professor") {
          response = await axios.get(`http://localhost:8080/auth/getProfessorById/${id}`);
        } else if (type === "paciente") {
          response = await axios.get(`http://localhost:8080/auth/getPacienteById/${id}`);
        }

        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
        setUserData(null); // Define o estado para null em caso de erro
      }
    };

    fetchData();
  }, [router.isReady, type, id]);

  if (!userData) {
    // Aguarda até que os dados estejam disponíveis
    return <>Carregando...</>;
  }

  return <Visualizar type={type} userData={userData} />;
}
