import { User } from 'types';
import ProfilePic from './Picture';
import { userInfoStyles } from '../styles';
import { Fragment } from 'react';

interface UserInfoProps {
    user: User;
}
export default function UserInfo(props: UserInfoProps){
    const { user } = props;
    const classes = userInfoStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <ProfilePic url={user.avatar_url} login={user.login} />
                <div className={classes.info}>
                    <Fragment>
                    <h1>{user.name}</h1>
                    <span>{user.login}</span>
                    <h4>{user.location}</h4>
                    <h4>{user.email}</h4>
                    <p>{user.bio}</p>
                    </Fragment>
                   
                        <p>
                            <span>{user.followers} seguidores</span> · <span>{user.following} seguindo</span>
                        </p>
                </div>
            </div>
            
        </div>
    )
}