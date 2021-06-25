import { Link, useParams } from "react-router-dom";
import { repositoryDetailStyles } from "components/user/styles";
import { useEffect, useState } from "react";
import { getRepo, getRepoDetail } from "services/requests";
import { Repository, UserSearch } from "types";
import Loading from "components/common/Loading";

interface RepositoryParams {
    repoName: string
}

interface RepositoryProps {
    user: string
}

export default function RepositoryDetail(props: RepositoryProps) {
    const { repoName } = useParams<RepositoryParams>();
    const { user } = props;
    const classes = repositoryDetailStyles();
    const [repo, setRepo] = useState<Repository>();
    const [languages, setLanguages] = useState({});
    const [stargazers, setStargazers] = useState<UserSearch[]>();

    useEffect(() => {
        let isMounted = true;
        getRepo(user, repoName).then(async (response) => {
            setRepo(response as Repository);
            setLanguages(await getRepoDetail(user, repoName, "languages") as Object);;
            setStargazers(await getRepoDetail(user, repoName, "stargazers") as UserSearch[]);
        });
        return () => { isMounted = false }
    }, [])

    if (repo === undefined) {
        return <Loading />;
    } else {
        return (
            <div className={classes.root}>
                <h1>{repo.name}</h1>
                <h3>{repo.full_name}</h3>
                <p>{repo.description}</p>
                <div style={{display:" flex", flexFlow: "row wrap",}}>
                    <div className={classes.column}>
                        <h4>Favoritado por {stargazers?.length} usuários</h4>

                        {stargazers?.map(user => {
                            return (
                                <p>{user.login}</p>
                            )
                        })}
                    </div>
                    <div className={classes.column}><h4>Linguagens usadas:</h4>
                        {Object.keys(languages).map(language => {
                            return (
                                <p>{language}</p>
                            )
                        })}</div>
                </div>  
                <a className={classes.githubLink} href={repo.html_url} rel="noreferrer" target="_blank">Visitar página do repositório</a>
                <Link className={classes.link} to={`/user/${user}`}>Voltar para repositórios do usuário</Link>
            </div>
        )
    }
}
