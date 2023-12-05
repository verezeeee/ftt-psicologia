import { Divider, Flex, Text, useToast, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import Select from "../../../../../components/Select";
import { useState } from "react";
import { FcSms } from "react-icons/fc";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";


export default function CadastrarConsulta() {
    const [nomePaciente, setNomePaciente] = useState("");
    const [tipoConsulta, setTipoConsulta] = useState("");
    const [status, setStatus] = useState("");
    const [dataConsulta, setDataConsulta] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFim, setHoraFim] = useState("");
    const [local, setLocal] = useState("");
    const [recorrencia, setRecorrencia] = useState("");
    const [tipoDeTratamento, setTipoDeTratamento] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [statusDaConsulta, setStatusDaConsulta] = useState("EM CADASTRO");
    const [cadastrarConsultaOpened, setCadastrarConsultaOpened] = useState(false);
    const toast = useToast();
    const handleChange = (value) => {
        setRecorrencia(value);
    };

    const { user } = useAuth();

    const salvarConsulta = async () => {
        if (!nomePaciente || !dataConsulta) {
            toast({
                status: "error",
                description: "Preencha todos os campos obrigatórios",
                duration: 1000,
            });
        } else {
            try {
                console.log("Dados enviados para o backend:", {
                    paciente: user.id,
                    tipoDeConsulta: tipoConsulta,
                    dataDaConsulta: dataConsulta,
                    horarioInicio: horaInicio,
                    horarioFinal: horaFim,
                    local,
                    frequencia: recorrencia,
                    tipoDeTratamento,
                    observacao: observacoes,
                    statusDaConsulta,
                });
                await axios.post('http://localhost:8080/auth/registrarConsulta', {
                    paciente: user.id,
                    tipoDeConsulta: tipoConsulta,
                    dataDaConsulta: dataConsulta,
                    horarioInicio: horaInicio,
                    horarioFinal: horaFim,
                    local,
                    frequencia: recorrencia,
                    tipoDeTratamento,
                    observacao: observacoes,
                    statusDaConsulta,
                });
                toast({
                    status: "success",
                    description: "Consulta salva com sucesso",
                    duration: 1000,
                });
                setCadastrarConsultaOpened(false);
            } catch (error) {
                toast({
                    status: "error",
                    description: "Erro ao salvar a consulta",
                    duration: 1000,
                });
            }
        }
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
                label="Paciente"
                options={["", "Cléber Mago", "Ratinho", "Juninho Capixaba"]}
                value={nomePaciente}
                setValue={setNomePaciente}
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
                    <Input label="DE:" type="time" value={horaInicio} setValue={setHoraInicio} />
                    <Input label="ATÉ:" type="time" value={horaFim} setValue={setHoraFim} />
                </Flex>
                <Select
                    label="Local"
                    options={["", "H201", "H202", "FTT", "E204", "OUTROS"]}
                    value={local}
                    setValue={setLocal}
                />
                <Input label="Data da Consulta" type="datetime-local" value={dataConsulta} setValue={setDataConsulta} />
                <Flex w="100%" align="center" justify="space-evenly" my={4}>
                    <RadioGroup onChange={handleChange} value={recorrencia}>
                        <Stack spacing={14} direction='row'>
                            <Radio value="Sessão única">Sessão única</Radio>
                            <Radio value="Semanal">Semanal</Radio>
                            <Radio value="Mensal">Mensal</Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Select
                    label="Tipo de Consulta"
                    options={["", "Individual", "Casal", "Familiar"]}
                    value={tipoConsulta}
                    setValue={setTipoConsulta}
                />
                <Input
                    label="Observações"
                    value={observacoes}
                    setValue={setObservacoes}
                    height="8rem"
                />
                <Flex align="center" w="100%">
                    <Text color="#000000" fontSize="1.8rem">
                        Status da consulta
                    </Text>
                </Flex>
                <Divider mt="2" />
                <Text color="#000000" textAlign='center' fontSize="1.5rem" bg='gray.200' border='2px solid none' m={4} >
                    Atualmente esse é o estado dessa consulta:
                    <Text color='yellow.500' fontWeight='bold'>
                       {statusDaConsulta} {/* Futuramente criar a lógica de controle de estado aqui dentro*/}
                    </Text>
                </Text>
            </Flex>
            <Flex align="center" mt="4" justify="space-between" w="100%">
                <Button label="Cancelar" onPress={() => setCadastrarConsultaOpened(false)} mt={0.1} />
                <Button
                    label="Salvar Consulta"
                    onPress= {salvarConsulta}
                    mt={0.1}
                    filled
                />
            </Flex>
        </Flex>
    );
}
