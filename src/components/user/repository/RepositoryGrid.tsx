import { Repository } from 'types';
import RepositoryContainer from './RepositoryContainer';
import { repositoryGridClasses } from 'components/user/styles'
import { useEffect } from 'react';
import { useState } from 'react';
import ReturnError from 'components/common/Error';

interface RepositoryGridProps {
    repositories: Repository[];
}

export default function RepositoryGrid(props: RepositoryGridProps) {
    const { repositories } = props;
    const orders = [
        {
            name: "Mais favoritados",
            function: (a: Repository, b: Repository) => { return b.stargazers_count - a.stargazers_count }
        },
        {
            name: "Menos favoritados",
            function: (a: Repository, b: Repository) => { return a.stargazers_count - b.stargazers_count }
        },
        {
            name: "Mais observados",
            function: (a: Repository, b: Repository) => { return b.stargazers_count - a.stargazers_count }
        },
        {
            name: "Menos observados",
            function: (a: Repository, b: Repository) => { return a.stargazers_count - b.stargazers_count }
        },
        {
            name: "Nome",
            function: (a: Repository, b: Repository) => { return a.name.localeCompare(b.name) }
        },

    ]
    
    const [repoList, setRepoList] = useState<Repository[]>([]);
    const [selectedOrder, setSelectedOrder] = useState(orders[0].name);
    const classes = repositoryGridClasses();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRepoList(repositories.sort(orders.find(element => element.name === event.target.value)?.function));
        setSelectedOrder(event.target.value);
    }

    useEffect(() => {
        setRepoList(repositories.sort(function (a, b) { return b.stargazers_count - a.stargazers_count }));
    }, [repositories]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h1>Repositórios</h1>
                <div className={classes.select}>Ordernar por: 
                    <select name="orderby" value={selectedOrder} onChange={handleChange} id="orderby">
                        {orders.map((item) => {
                        return (
                            <option key={item.name} value={item.name}>{item.name}</option>
                        )})}
                    </select>
                </div>
            </div>
            {repoList.length === 0 ?
                <ReturnError message="O usuário não possui repositórios" />
                :
                <div className={classes.container}>
                    {repoList.map(repo => {
                        return (
                            <div key={repo.id} className={classes.item}>
                                <RepositoryContainer repo={repo} />
                            </div>

                        )
                    })}
                </div>
            }
        </div>
    )

}