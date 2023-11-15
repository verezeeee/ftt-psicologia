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
    if(!router.isReady) return
    axios.get(`http://localhost:8080/auth/getSecretarioById/${router.query.id}`).then((data) => {
        setSecretario(data.data)
    })
    /* axios.get(`http://localhost:8080/auth/getSecretarioById/${router.query.id}`).then((data) => {
        setAluno(data.data)
    })
    .catch((error) => {
        console.error("Erro ao obter o Aluno:", error);
      });
    axios.get(`http://localhost:8080/auth/getSecretarioById/${router.query.id}`).then((data) => {
        setProfessor(data.data)
        
    })
    .catch((error) => {
        console.error("Erro ao obter o Professor:", error);
      });
    */
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