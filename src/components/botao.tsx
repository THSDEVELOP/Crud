interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children: any
}

export default function botao(props: BotaoProps) {
    return (
        <button>
            {props.children}
        </button>
    )
}