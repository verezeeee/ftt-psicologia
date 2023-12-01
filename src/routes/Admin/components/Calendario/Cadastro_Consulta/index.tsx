import { Divider, Flex, Text, useToast, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import Select from "../../../../../components/Select";
import { useState } from "react";
import { FcSms } from "react-icons/fc";

export default function CadastrarConsulta() {
    const [nome, setNome] = useState("");
    const [tipoConsulta, setTipoConsulta] = useState("");
    const [status, setStatus] = useState("");
    const [data, setData] = useState("");
    const [hora1, setHora1] = useState("");
    const [hora2, setHora2] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [cadastrarConsultaOpened, setCadastrarConsultaOpened] = useState(false);
    const [recorrenciaOption, setRecorrenciaOption] = useState("");
    const toast = useToast();
    const handleChange = (value) => {
        setRecorrenciaOption(value);
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
                value={nome}
                setValue={setNome}
            />
            <Flex align="center" w="100%">
                <Text color="#000000" fontSize="1.8rem">
                    Dados da consulta
                </Text>
            </Flex>
            <Divider mt="2" />
            <Flex flexDir="column" py="4" w="100%">
                <Input label="Tipo de tratamento" type="text" value={data} setValue={setData} />
                <Text color="#767474" fontSize="1.2rem">
                    Tempo estimado:
                </Text>
                <Flex w="100%" align="center" justify="space-evenly" my={4}>
                    <Input label="DE:" type="time" value={hora1} setValue={setHora1} />
                    <Input label="ATÉ:" type="time" value={hora2} setValue={setHora2} />
                </Flex>
                <Select
                    label="Local"
                    options={["", "H201", "H202", "FTT", "E204", "OUTROS"]}
                    value={nome}
                    setValue={setNome}
                />
                <Input label="Data da Consulta" type="datetime-local" value={data} setValue={setData} />
                <Flex w="100%" align="center" justify="space-evenly" my={4}>
                    <RadioGroup onChange={handleChange} value={recorrenciaOption} >
                        <Stack spacing={14} direction='row'>
                            <Radio value="opcao1">Sessão única</Radio>
                            <Radio value="opcao2">Semanal</Radio>
                            <Radio value="opcao3">Mensal</Radio>
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
                        EM CADASTRO  {/* Futuramente criar a lógica de controle de estado aqui dentro*/}
                    </Text>
                </Text>
            </Flex>
            <Flex align="center" mt="4" justify="space-between" w="100%">
                <Button label="Cancelar" onPress={() => setCadastrarConsultaOpened(false)} mt={0.1} />
                <Button
                    label="Salvar Consulta"
                    onPress={() => {
                        if (!nome || !status || !data) {
                            toast({
                                status: "error",
                                description: "Preencha todos os campos obrigatórios",
                                duration: 1000,
                            });
                        } else {
                            // Aqui vem o nosso POST para a futura api de salvamento de consulta
                            toast({
                                status: "success",
                                description: "Consulta salva com sucesso",
                                duration: 1000,
                            });
                            setCadastrarConsultaOpened(false);
                        }
                    }}
                    mt={0.1}
                    filled
                />
            </Flex>
        </Flex>
    );
}
