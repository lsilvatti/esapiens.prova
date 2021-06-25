import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchFieldStyles } from './styles';

interface SearchProps {
    fieldChange: (text: string) => void
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function SearchField(props: SearchProps){
    
    const query = useQuery();
    const { fieldChange } = props;

    const [value, setValue] = useState<string>("");

    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        fieldChange(event.target.value);
    }

    function keyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            if(value !== ""){
                window.location.assign(`/search?user=${value}&page=1`);
            }
        }
      }

    useEffect(() =>{
        setValue(query.get("user") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const classes = searchFieldStyles();

    return (
        <div className={classes.root}>
            <input id="field" placeholder="Pesquisar usuário" onKeyPress={keyPress} value={value} onChange={handleChange}  type="text" />
        </div>
        )
}