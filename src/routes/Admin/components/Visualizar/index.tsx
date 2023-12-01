import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";
import { Secretario, Aluno, Professor, Paciente } from "./screens";
import { useMediaQuery } from "../../../../utils/useMediaQuery";
import { useRouter } from "next/router";

function Dashboard({ type, userData }) {
  const { mobile } = useMediaQuery();
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  const navegarParaHome = () => {
    router.push('/  ');
  };

  useEffect(() => {
    if (type === "secretario") {
      setActiveTab("Secretários");
    } else if (type === "aluno") {
      setActiveTab("Alunos");
    } else if (type === "professor") {
      setActiveTab("Professores");
    } else if (type === "paciente") {
      setActiveTab("Pacientes");
    }
  }, [type]);


  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      navegarParaHome();
    } else {
      setActiveTab(newTab);
    }
  };

  return (
    <Flex flexDir="row" w="100%">
      {!mobile && <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />}

      <Flex flexDir="column" w="100%">
        <Header activeTab={activeTab} setActiveTab={handleTabChange} />

        {activeTab === "Secretários" && !mobile && (
          <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
        )}

        {type === "secretario" && activeTab === "Secretários" && (
          <Secretario userData={userData} />
        )}
        {type === "aluno" && activeTab === "Alunos" && (
          <Aluno userData={userData} />
        )}
        {type === "professor" && activeTab === "Professores" && (
          <Professor userData={userData} />
        )}
        {type === "paciente" && activeTab === "Pacientes" && (
          <Paciente userData={userData} />
        )}
      </Flex>
    </Flex>
  );
}

export default Dashboard;
