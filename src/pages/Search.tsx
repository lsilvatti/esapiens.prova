import { useLocation } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react';
import { searchUsers } from 'services/requests';
import SearchBar  from 'components/search/Bar';
import ReturnError from 'components/common/Error';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Search(){
    const query = useQuery();
    const [error, setError] = useState(false);

    useEffect(()=>{
        searchUsers(query.get("user") ?? "").then((response) =>{
            console.log(response);
        }).catch((error) => {
            setError(true);
        });
    }, [])

    return (
         <Fragment>
             <SearchBar />
             {error ? 
             <div>
                 <ReturnError message="A pesquisa não retornou resultados!" />
             </div>
             :
             <div></div>}
         </Fragment>
    )
}