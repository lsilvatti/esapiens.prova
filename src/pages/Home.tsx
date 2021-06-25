import { useState } from 'react';
import SearchField from 'components/search/field';
import { homeStyles } from './styles';
import logo from 'assets/img/logo.png';
import SearchButton from 'components/search/Button';

export default function Home(){
    const classes =  homeStyles();
    const [search, setSearch] = useState("");
    const textChange = (text:string) => {
        setSearch(text);
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <img src={logo} alt="logo" />
            <SearchField fieldChange={textChange}/>
            <SearchButton query={search} />
            </div>
        
        </div>
    )
}