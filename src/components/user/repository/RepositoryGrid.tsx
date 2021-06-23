import { Repository } from 'types';
import RepositoryContainer from './RepositoryContainer';
import { repositoryGridClasses } from 'components/user/styles'
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

interface RepositoryGridProps {
    repositories: Repository[];
}

export default function RepositoryGrid(props: RepositoryGridProps) {
    const { repositories } = props;
    const [repoList, setRepoList] = useState<Repository[]>([]);
    const classes = repositoryGridClasses();

    useEffect(() =>{
        setRepoList(repositories);
    }, [repositories])

    return (
        <div className={classes.wrapper}>
            <h1>Repositórios</h1>
            {repoList.length === 0 ?
            <div className={classes.empty}>
                <FontAwesomeIcon icon={faSadCry} size="5x" />
                <span>O usuário não possui repositórios</span>
            </div>
            :
            <div className={classes.container}>
                {repoList.map(repo => {
                    return (
                        <div className={classes.item}>
                            <RepositoryContainer repo={repo} />
                        </div>

                    )
                })}
            </div>
        }
        </div>
    )

}