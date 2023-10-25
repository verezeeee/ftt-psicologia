import { useRouter } from "next/router"
import axios from "axios"
import { useState, useEffect } from "react"
import Visualizar from "../../routes/Admin/components/Visualizar/Secretario"

export default function SecretarioID () {
    const router = useRouter()
    const [secretario, setSecretario] = useState("")
    const [aluno, setAluno] = useState("")
    const [professor, setProfessor] = useState("")
    const [paciente, setPaciente] = useState("")





    useEffect(() => {
    if(!router.isReady) return
    axios.get(`http://localhost:8080/auth/getSecretarioById/${router.query.id}`).then((data) => {
        console.log(data.data)
        setSecretario(data.data)
    })
    
    }, [router.isReady])


    return(
        <>
        <Visualizar nome={secretario.nome} email={secretario.email} telefone={secretario.telefoneContato} turno={secretario.turno} cpf={secretario.cpf}/>
        </>
    )
}