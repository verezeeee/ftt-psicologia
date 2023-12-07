import { Divider, Flex, Text, useToast, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import Select from "../../../../../components/Select";
import { useState, useEffect } from "react";
import { FcSms } from "react-icons/fc";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function CadastrarConsulta({
    closeModal,
}:{
    closeModal: () => void;
}) {
    const [nomePaciente, setNomePaciente] = useState("");
    const [tipoDeConsulta, setTipoDeConsulta] = useState("");
    const [dataDaConsulta, setDataDaConsulta] = useState("");
    const [horarioInicio, setHorarioInicio] = useState("");
    const [horarioFinal, setHorarioFim] = useState("");
    const [local, setLocal] = useState("");
    const [recorrencia, setRecorrencia] = useState("");
    const [tipoDeTratamento, setTipoDeTratamento] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [statusDaConsulta] = useState("EM CADASTRO");
    const [pacientesOptions, setPacientesOptions] = useState([]);
    const [paciente, setPaciente] = useState("");
    const toast = useToast();
    const router = useRouter()
    
    const handleChange = (value) => {
        setRecorrencia(value);
    };

    const { user } = useAuth();
    const userId = user.id;

    const optionsLocal = [
        { title: 'H201', resourceId: 'a',  },
        { title: 'H202', resourceId: 'b', },
        { title: 'FTT', resourceId: 'c',  },
        { title: 'E204', resourceId: 'd', },
        { title: 'OUTROS', resourceId: 'e', },
      ];
      
      useEffect(() => {
        const getPacientes = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/auth/getPacientesByIdAluno/${userId}`);
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
        if (!paciente) {
            toast({
              status: "error",
              description: "Selecione um Paciente",
              duration: 500,
            });
            return;
          }
      
          const regex = /id: (\d+) nomeAluno: (.+)/;
          const match = paciente.match(regex);
      
          if (!match) {
            toast({
              status: "error",
              description: "Formato do paciente inválido",
              duration: 500,
            });
            return;
          }

          const [, id, nomePaciente,] = match;

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

                const res = await axios.post('http://localhost:8080/auth/registrarConsulta', {
                    alunoID: user.id,
                    title: tipoDeTratamento,
                    start: start.toISOString(),
                    end: end.toISOString(),
                    resourceId: local,
                    frequencia: recorrencia,
                    tipoDeConsulta,
                    pacienteNome: nomePaciente,
                    pacienteID: id,
                    observacao: observacoes,
                    statusDaConsulta: "AGENDADA",
                });
                if (res.status === 200) {
                    toast({
                      status: "success",
                      description: "Consulta salva com sucesso",
                      duration: 1000,
                    });
                    closeModal();
            } else {
                toast({
                    status: "error",
                    description: "Erro ao salvar a consulta",
                    duration: 1000,
                  });
                }
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
              label="Paciente: "
              options={[
                { label: "", value: "" },
                ...pacientesOptions.map((paciente) => ({
                  label:  paciente.nome,
                  value: "id:" + paciente._id + " nomePaciente:" + paciente.nome ,
                })),
              ]}
              value={paciente}
              setValue={setPaciente}
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
                    options={['', ...optionsLocal.map(option => option.title)]}
                    value={local}
                    setValue={setLocal}
                />
                <Input label="Data da Consulta" type="date" value={dataDaConsulta} setValue={setDataDaConsulta} />
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
                    value={tipoDeConsulta}
                    setValue={setTipoDeConsulta}
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
                <Button label="Cancelar" onPress={closeModal} mt={0.1} />
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
