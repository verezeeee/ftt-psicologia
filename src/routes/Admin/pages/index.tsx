import React, { useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useAuth, withAuth } from "../../../contexts/AuthContext";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Secretarios, Alunos, Professores } from "./screens";

import { useMediaQuery } from "../../../utils/useMediaQuery";
import Table from "../../../components/Tables";
import Head from "next/head";

function Dashboard() {
  const { user } = useAuth();

  const { mobile, tablet, desktop } = useMediaQuery();

  const [activeTab, setActiveTab] = React.useState("Secretários");

  return (
    <Flex flexDir="row" w="100%">
      {!mobile && <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />}

      <Flex flexDir="column" w="100%">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "Secretários" && (
          <Secretarios user={user} activeTab={activeTab} />
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
