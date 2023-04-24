import React, { useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useAuth, withAuth } from "../../contexts/AuthContext";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Pacientes, Alunos, Professores } from "./screens";

function Dashboard() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = React.useState("Pacientes");

  return (
    <Flex flexDir="row">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Flex flexDir="column">
        <Header />

        {activeTab === "Pacientes" && (
          <Pacientes user={user} activeTab={activeTab} />
        )}
        {activeTab === "Alunos" && <Alunos user={user} activeTab={activeTab} />}
        {activeTab === "Professores" && (
          <Professores user={user} activeTab={activeTab} />
        )}
      </Flex>
    </Flex>
  );
}

export default withAuth(Dashboard);
