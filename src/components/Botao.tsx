interface BotaoProps {
    cor?: 'green' | 'blue' | 'black'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'

    return (    
        <button className={`bg-gradient-to-r from-purple-600 to-purple-700 text-gray-200
            rounded-full p-2 m-1 ${props.className}
            `}>
            {props.children}
        </button>
    )
}