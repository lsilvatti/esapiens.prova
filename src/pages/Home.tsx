import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { searchUsers } from 'services/requests';
import SearchField from 'components/search/field';
import { homeStyles } from './styles';
import logo from 'assets/img/logo.png';
import SearchButton from 'components/search/Button';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Home(){
    const classes =  homeStyles();
    const [search, setSearch] = useState("");
    const textChange = (text:string) => {
        setSearch(text);
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <img src={logo} />
            <SearchField fieldChange={textChange}/>
            <SearchButton query={search} />
            </div>
        
        </div>
    )
}