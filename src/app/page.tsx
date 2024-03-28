import Layout from "../components/Layout";
import Image from "next/image";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, 1),
    new Cliente('Bia', 33, 2),
    new Cliente('Leticia', 32, 3),
    new Cliente('Tanisha', 31, 4) 
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log("clienteSelecionado")

  }

  function clienteExcluido(cliente: Cliente) {
    console.log("clienteExcluido")

  }

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r 
      from-purple-500 to-blue-600 text-white`
    }>
      <Layout titulo="Cad Unico">
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}          
        />
      </Layout>
    </div>
  );
}
