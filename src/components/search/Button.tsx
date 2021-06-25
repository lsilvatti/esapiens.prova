import { buttonStyles } from "./styles";

interface ButtonProps {
    query: string
}

export default function SearchButton(props: ButtonProps) {
    const classes = buttonStyles();
    const { query } = props
    const search = () => {
        if(query == ""){

        }else{
            window.location.assign(`/search?user=${query}&page=1`);
        }
        
    }

    return (
            <button className={classes.root} onClick={search} type="button">
                Pesquisar
            </button>
    )
} 