import { Fragment, useEffect, useState } from "react"
import RepositoryGrid from 'components/user/repository/RepositoryGrid';
import UserInfo from 'components/user/info/Info';
import SearchBar from 'components/search/Bar';
import { getUser, getRepos } from "services/requests";
import { Route, BrowserRouter as Router, Switch, useParams, useRouteMatch } from "react-router-dom";
import ReturnError from 'components/common/Error'; 
import { Repository, User } from "types";
import  RepositoryDetail from "components/user/repository/RepositoryDetail";
import Loading from 'components/common/Loading';

interface ProfileParams{
    userId: string
}

export default function Profile(){
    let { userId } = useParams<ProfileParams>();
    const [error, setError] = useState(false);
    const [repos, setRepos] = useState<Repository[]>([])
    const [profile, setProfile] = useState<User>();
    const { path } = useRouteMatch();
    useEffect(()=>{
        getUser(userId ?? "").then(async (response) =>{
            setProfile(response as User);
            let repoList = await getRepos(userId ?? "");
            setRepos(repoList as Repository[]);
        }).catch(() => {
            setError(true);
        });
    }, [userId]);


    if(profile === undefined){
        return (
            <Fragment>
                
                <Loading />
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <SearchBar />
                {error ? 
                <ReturnError message="Usuário não encontrado" />
          :
                <Fragment>
                    <UserInfo user={profile} />
                    <Router>
                        <Switch>
                            <Route exact path={path}><RepositoryGrid repositories={repos} /></Route>
                            <Route path={`${path}/:repoName`}><RepositoryDetail user={profile.login} /></Route>
                        </Switch>
                    </Router>
                    
                </Fragment>
          }
            </Fragment>
        )
    }
}