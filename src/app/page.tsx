'use client';
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao"
import Formulario from "@/components/Formulario";
import useClientes from "@/hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    excluirCliente,
    exibirTabela,
    novoCliente,
    selecionarCliente,
    salvarCliente,
    tabelaVisivel
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r 
      from-purple-500 to-blue-600 text-white`
    }>
      <Layout titulo="Cad Unico">
        {tabelaVisivel ? (
           <>
           <div className="flex justify-end">
             <Botao cor="green" className="mb-2" 
                onClick={novoCliente}>Novo Usuario</Botao>
           </div>
           <Tabela clientes={clientes}
             clienteSelecionado={selecionarCliente} 
             clienteExcluido={excluirCliente}            
           />
           </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}></Formulario>
        )}
      </Layout>
    </div>
  );
}
