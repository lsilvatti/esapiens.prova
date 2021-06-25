import { useLocation } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react';
import { searchUsers } from 'services/requests';
import SearchBar from 'components/search/Bar';
import UserGrid from 'components/user/card/CardGrid';
import { UserSearch, UserSearchResponse } from 'types';
import Loading from 'components/common/Loading';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Search() {
    const query = useQuery();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState<UserSearch[]>([]);
    const [currentUser, setCurrentUser] = useState<string | null>("");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let user = query.get("user");
        let page = Number(query.get("page")) ?? 1;
        if (user !== null) {
            setCurrentUser(user);
            setCurrentPage(page);
            searchUsers(user, page).then((response) => {
                let resp = response as UserSearchResponse;
                setUserList(resp.items);
                setCount(resp.total_count);
                setLoading(false); 
            }).catch((error) => {
                setLoading(false);
            });
        } else {
            window.location.assign(`/`)
            
        }
    }, [query]);

    const TargetPage = (page: number) => {
       window.location.assign(`/search?user=${currentUser}&page=${page}`)
    }

    return (
        <Fragment>
            <SearchBar /> 
            {loading ?
                <Loading />
                :
                        <Fragment>
                            
                                <UserGrid getTargetPage={(page) => TargetPage(page)} users={userList} count={count} currentPage={currentPage} query={query.get("user")} />
                        </Fragment>
            }
        </Fragment>

    )
}