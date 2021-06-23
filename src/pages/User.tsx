import { Fragment } from "react"
import RepositoryGrid from 'components/user/repository/RepositoryGrid';
import response from 'response.json';
import repository from 'repository.json';
import { userPageStyles } from './styles';
import UserInfo from 'components/user/info/Info';
import SearchBar from 'components/search/Bar';
export default function User(){
    const classes = userPageStyles();

    return(
        <Fragment>
            <SearchBar />
            <UserInfo user={response} />
            <RepositoryGrid repositories={repository} />
        </Fragment>
    )
}