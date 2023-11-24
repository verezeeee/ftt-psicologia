import { useRouter } from "next/router"
import axios from "axios"
import { useState, useEffect } from "react"
import Visualizar from "../../../routes/Admin/components/Visualizar"

export default function VisualizarUsuário() {
    const router = useRouter()
    const { type, id } = router.query;
    const [secretario, setSecretario] = useState("")
    const [aluno, setAluno] = useState("")
    const [professor, setProfessor] = useState("")
    const [paciente, setPaciente] = useState("")

    useEffect(() => {
        if (router.isReady) {
        
            if (type === 'secretario') {
                axios.get(`http://localhost:8080/auth/getSecretarioById/${router.query.id}`)
                    .then((response) => {
                        setSecretario(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao obter o Secretario:", error);
                    });
            } else if (type === 'aluno') {
                axios.get(`http://localhost:8080/auth/getAlunoById/${router.query.id}`)
                    .then((response) => {
                        setAluno(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao obter o Aluno:", error);
                    });
            } else if (type === 'professor') {
                axios.get(`http://localhost:8080/auth/getProfessorById/${router.query.id}`)
                    .then((response) => {
                        setProfessor(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao obter o Professor:", error);
                    });
            } else if (type === 'paciente') {
                axios.get(`http://localhost:8080/auth/getPacienteById/${router.query.id}`)
                    .then((response) => {
                        setPaciente(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao obter o Paciente:", error);
                    });
            } else {
                console.error("Tipo de requisição não reconhecido:", type);
            }
        }

    }, [router.isReady, type, id])
    if(type === "secretario"){
        return(
            <Visualizar type="secretario" 
            userData={secretario}/>
        )
    }else if(type === "aluno"){
        return(
        <Visualizar type="aluno"
        userData={aluno}/>
        )
    }else if(type === "professor"){
        return(
            <Visualizar type="professor"
            userData={professor}/>
        )
    }else if(type === "paciente"){
        return(
            <Visualizar type="paciente"
            userData={paciente}/>
        )
    }else{
        return(
            <>
            Usuário não encontrado
            </>
        )
    }
}