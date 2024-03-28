'use client';
import Layout from "../components/Layout";
import Image from "next/image";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao"

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, 1),
    new Cliente('Bia', 33, 2),
    new Cliente('Leticia', 32, 3),
    new Cliente('Tanisha', 31, 4) 
  ]

  JSON.stringify(clientes)

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)

  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluindo... ${cliente.nome}`)

  }

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r 
      from-purple-500 to-blue-600 text-white`
    }>
      <Layout titulo="Cad Unico">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-2">Novo Usuario</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}          
        />
      </Layout>
    </div>
  );
}
