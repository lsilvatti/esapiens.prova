import { Fragment, useEffect, useState } from "react"
import RepositoryGrid from 'components/user/repository/RepositoryGrid';
import response from 'response.json';
import repository from 'repository.json';
import { userPageStyles } from './styles';
import UserInfo from 'components/user/info/Info';
import SearchBar from 'components/search/Bar';
import { getUser, getRepos } from "services/requests";
import { useParams } from "react-router-dom";
import ReturnError from 'components/common/Error'; 
import { Repository, User } from "types";
import { PacmanLoader } from 'react-spinners';
import Loading from 'components/common/Loading';

interface params{
    userId: string
}

export default function Profile(){
    const classes = userPageStyles();
    let { userId } = useParams<params>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState<Repository[]>([])
    const [profile, setProfile] = useState<User>({
        login: "",
        id: 0,
        node_id: "",
        avatar_url: "",
        gravatar_id: "",
        url: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type: "",
        site_admin: false,
        name: "",
        company: "",
        blog: "",
        location: "",
        email: "",
        hireable: false,
        bio: "",
        twitter_username: "",
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: "",
        updated_at: "",
    });

    useEffect(()=>{
        setLoading(true);
        getUser(userId ?? "").then(async (response) =>{
            console.log(response);
            setProfile(response as User);
            let repoList = await getRepos(userId ?? "");
            setRepos(repoList as Repository[]);
            setLoading(false);
        }).catch((error) => {
            setError(true);
            setLoading(false);
        });
    }, [])

    return(
        <Fragment>
            <SearchBar />
            
            {loading ? <Loading />
            :
            <Fragment>
                {error ? 
                <ReturnError message="Usuário não encontrado" />
          :
                <Fragment>
                    <UserInfo user={profile} />
                    <RepositoryGrid repositories={repos} />
                </Fragment>
          }
            </Fragment>
            }

        </Fragment>
    )
}