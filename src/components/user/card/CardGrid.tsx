import { UserSearch } from 'types';
import CardContainer from './CardContainer';
import { userGridClasses } from 'components/user/styles'
import { useEffect } from 'react';
import { useState } from 'react';
import ReturnError from 'components/common/Error';

interface UserSearchProps {
    users: UserSearch[];
    query: string | null;
    count: number;
    currentPage: number;
    getTargetPage: (number: number) => void;
}

export default function UserGrid(props: UserSearchProps) {
    const { users, query, count, currentPage, getTargetPage } = props;
    const [userList, setUserList] = useState<UserSearch[]>([]);
    const [pages, setPages] = useState(0);

    const classes = userGridClasses();

    useEffect(() => {
        setUserList(users);
        let numberPages = Math.trunc(count/30) + 1;
        setPages(numberPages);
    }, [users]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h1>Resultados da pesquisa por {query}</h1>
                <div className={classes.pagination}>
                    <a onClick={() => getTargetPage(currentPage - 1)} className={currentPage === 1 ? classes.displayNone : classes.paglink}>{"<< Anterior"}</a> <a onClick={() => getTargetPage(currentPage + 1)}  className={currentPage >= pages ? classes.displayNone : classes.paglink} >{"Próxima >>"}</a>
                </div>
            </div>
            {userList.length === 0 ?
                    <ReturnError message="A pesquisa não encontrou resultados" />
                :
                <div className={classes.container}>
                    {userList.map(user => {
                        return (
                            <div key={user.id} className={classes.item}>
                                <CardContainer user={user} />
                            </div>

                        )
                    })}
                </div>
            }
        </div>
    )

}