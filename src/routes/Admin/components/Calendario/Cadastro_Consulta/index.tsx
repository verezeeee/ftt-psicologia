import { Divider, Flex, Text, useToast, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import Select from "../../../../../components/Select";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function CadastrarConsulta({
    closeModal,
}: {
    closeModal: () => void;
}) {
    const [nomePaciente, setNomePaciente] = useState("");
    const [tipoDeConsulta, setTipoDeConsulta] = useState("");
    const [dataDaConsulta, setDataDaConsulta] = useState("");
    const [horarioInicio, setHorarioInicio] = useState("");
    const [horarioFinal, setHorarioFim] = useState("");
    const [local, setLocal] = useState("");
    const [recorrencia, setRecorrencia] = useState({
        frequency: "",
        interval: 1,
    });
    const [tipoDeTratamento, setTipoDeTratamento] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [statusDaConsulta] = useState("EM CADASTRO");
    const [pacientesOptions, setPacientesOptions] = useState([]);
    const [pacienteEncaminhador, setPacienteEncaminhador] = useState("");
    const [consultaRecorrenteID] = useState("");
    const toast = useToast();
    const router = useRouter()

    const handleChange = (value) => {
        setRecorrencia((prevRecorrencia) => ({
            ...prevRecorrencia,
            frequency: value,
        }));
    };

    const { user } = useAuth();
    const userId = user.id;

    var mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };


    useEffect(() => {
        const getPacientes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/auth/getPacientesSelect`);
                setPacientesOptions(response.data);
            } catch (error) {
                toast({
                    status: "error",
                    description: "Erro ao buscar Pacientes",
                    duration: 1000,
                })
            }
        };

        getPacientes();
    }, [])

    const salvarConsulta = async () => {
        if (!pacienteEncaminhador) {
            toast({
                status: "error",
                description: "Selecione um Paciente",
                duration: 500,
            });
            return;
        }
        const regex = /id:(\w+) nomePaciente:(.+)/;
        const match = pacienteEncaminhador.match(regex);

        if (!match) {
            toast({
                status: "error",
                description: "Formato do paciente inválido",
                duration: 500,
            });
            return;
        }

        const [, id, nomePaciente] = match;

        if (!nomePaciente || !dataDaConsulta) {
            toast({
                status: "error",
                description: "Preencha todos os campos obrigatórios",
                duration: 1000,
            });
        } else {
            try {
                const start = new Date(`${dataDaConsulta}T${horarioInicio}`);
                const end = new Date(`${dataDaConsulta}T${horarioFinal}`);
                let occurrences = [];

                if (recorrencia.frequency === "Sessão única") {
                    occurrences.push({ start, end });
                    console.log("Cheguei aqui no push")
                } else if (recorrencia.frequency === "Semanal" || recorrencia.frequency === "Mensal") {
                    const occurrenceStart = new Date(start);
                    const occurrenceEnd = new Date(end);
                    for (let i = 0; i < 4; i++) {
                        occurrences.push({ start: new Date(occurrenceStart), end: new Date(occurrenceEnd) });

                        if (recorrencia.frequency === "Semanal") {
                            occurrenceStart.setDate(occurrenceStart.getDate() + 7);
                            occurrenceEnd.setDate(occurrenceEnd.getDate() + 7);
                        } else if (recorrencia.frequency === "Mensal") {
                            occurrenceStart.setMonth(occurrenceStart.getMonth() + 1);
                            occurrenceEnd.setMonth(occurrenceEnd.getMonth() + 1);
                        }
                    }
                }
                const consultaRecorrenteID = mongoObjectId();
                console.log("Cheguei aqui no for")
                for (const occurrence of occurrences) {
                    const res = await axios.post('http://localhost:8080/auth/registrarConsulta', {
                        alunoID: user.id,
                        title: tipoDeTratamento,
                        start: occurrence.start.toISOString(),
                        end: occurrence.end.toISOString(),
                        resourceId: local,
                        recorrencia: {
                            frequency: recorrencia.frequency,
                            interval: recorrencia.interval,
                        },
                        tipoDeConsulta,
                        consultaRecorrenteID,
                        pacienteNome: nomePaciente,
                        pacienteID: id,
                        observacao: observacoes,
                        statusDaConsulta: "AGENDADA",
                    });

                    if (res.status !== 200) {
                        throw new Error("Erro ao salvar a consulta");
                    }
                }

                toast({
                    status: "success",
                    description: "Consultas salvas com sucesso",
                    duration: 1000,
                });
                closeModal();
            } catch (error) {
                toast({
                    status: "error",
                    description: "Erro ao salvar a consulta",
                    duration: 1000,
                });
            }
        };
    };

    return (
        <Flex flexDir="column" p="4">
            <Flex align="center" w="100%">
                <Text color="#000000" fontSize="1.8rem">
                    Dados do Paciente
                </Text>
            </Flex>
            <Divider mt="2" />
            <Select
                label="Paciente: "
                options={[
                    { label: "", value: "" },
                    ...pacientesOptions.map((paciente) => ({
                        label: paciente.nome,
                        value: "id:" + paciente._id + " nomePaciente:" + paciente.nome,
                    })),
                ]}
                value={pacienteEncaminhador}
                setValue={setPacienteEncaminhador}
            />
            <Flex align="center" w="100%">
                <Text color="#000000" fontSize="1.8rem">
                    Dados da consulta
                </Text>
            </Flex>
            <Divider mt="2" />
            <Flex flexDir="column" py="4" w="100%">
                <Input label="Tipo de tratamento" type="text" value={tipoDeTratamento} setValue={setTipoDeTratamento} />
                <Text color="#767474" fontSize="1.2rem">
                    Tempo estimado:
                </Text>
                <Flex w="100%" align="center" justify="space-evenly" my={4}>
                    <Input label="DE:" type="time" value={horarioInicio} setValue={setHorarioInicio} />
                    <Input label="ATÉ:" type="time" value={horarioFinal} setValue={setHorarioFim} />
                </Flex>
                <Select
                    label="Local"
                    options={['', "FTT", "H201", "H401", "OUTRA"]}
                    value={local}
                    setValue={setLocal}
                />
                <Input label="Data da Consulta" type="date" value={dataDaConsulta} setValue={setDataDaConsulta} />
                <Flex w="100%" align="center" justify="space-evenly" my={4}>
                    <Select
                        label="Intervalo"
                        options={["", "Sessão única", "Semanal", "Mensal"].map(String)}
                        value={recorrencia.frequency}
                        setValue={(value) =>
                            setRecorrencia((prevRecorrencia) => ({
                                ...prevRecorrencia,
                                frequency: value as string,
                                interval: value === "Semanal" ? 7 : value === "Mensal" ? 30 : 1,
                            }))
                        }
                    />

                </Flex>
                <Select
                    label="Tipo de Consulta"
                    options={["", "Individual", "Casal", "Familiar"]}
                    value={tipoDeConsulta}
                    setValue={setTipoDeConsulta}
                />
                <Input
                    label="Observação:"
                    value={observacoes}
                    setValue={setObservacoes}
                    isTextarea={true}
                />
                <Flex align="center" w="100%">
                    <Text color="#000000" fontSize="1.8rem">
                        Status da consulta
                    </Text>
                </Flex>
                <Divider mt="2" />
                <Text color="black" textAlign='center' fontSize="1.5rem" bg='white' border='2px solid #C760EB' borderRadius={8} m={4}>
                    Atualmente esse é o estado dessa consulta:
                    <Text color='gray' fontWeight='bold' fontSize='2xl'>
                        Em cadastro
                    </Text>
                </Text>
            </Flex>
            <Flex align="center" mt="4" justify="space-between" w="100%">
                <Button label="Cancelar" onPress={closeModal} mt={0.1} />
                <Button
                    label="Salvar Consulta"
                    onPress={salvarConsulta}
                    mt={0.1}
                    filled
                />
            </Flex>
        </Flex>
    );
}
