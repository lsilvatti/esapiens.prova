import { useEffect, useState } from 'react';
import { searchFieldStyles } from './styles';

interface SearchProps {
    fieldChange: (text: string) => void
}

export default function SearchField(props: SearchProps){

    const { fieldChange } = props;

    const [value, setValue] = useState("");

    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        fieldChange(event.target.value);
    }

    const classes = searchFieldStyles();

    return (
        <div className={classes.root}>
            <input id="field" placeholder="Pesquisar usuário" value={value} onChange={handleChange}  type="text" />
        </div>
        )
}