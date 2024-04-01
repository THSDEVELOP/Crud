interface BotaoProps {
    cor?: 'green' | 'blue' | 'black'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'

    return (    
        <button onClick={props.onClick} className={`bg-gradient-to-r from-purple-600 to-purple-700 text-gray-200
            rounded-full p-2 m-1 ${props.className}
            `}>
            {props.children}
        </button>
    )
}