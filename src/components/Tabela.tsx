import React from "react"
import Cliente from "../core/Cliente"
import { IconEdicao, IconLixo,} from "./Icones"
import { Component } from "react"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>   
        )
    }

    function renderizarDados () {
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}>
                    <td className="text-left p-5">{cliente.id}</td>
                    <td className="text-left p-5">{cliente.nome}</td>
                    <td className="text-left p-5">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                { props.clienteSelecionado ? (
                    <button onClick={(e) => console.log(e)/*props.clienteSelecionado?.(cliente)*/} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconEdicao}
                    </button>

                ) : <></>}
                { props.clienteExcluido ? (
                    <button onClick={(e) => console.log(e)/*props.clienteExcluido?.(cliente)*/} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconLixo}
                    </button>

                ) : <></>}

            </td>
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}