interface ButtonProps {
    query: string
}

export default function SearchButton(props: ButtonProps) {
    const { query } = props
    const search = () => {
        window.location.assign(`/search?user=${query}`);
    }

    return (
            <button onClick={search} type="button">
                Click Me!
            </button>
    )
} 