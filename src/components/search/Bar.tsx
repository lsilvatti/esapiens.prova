import { searchBarStyles } from './styles';
import SearchField from './field';
import SearchButton from './Button';
import { useState } from 'react';

export default function SearchBar() {
    const classes = searchBarStyles();
    const [search, setSearch] = useState("");
    const textChange = (text:string) => {
        setSearch(text);
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.container}> <SearchField fieldChange={textChange}/>
            <SearchButton query={search} /></div>
        </div>
    )
}