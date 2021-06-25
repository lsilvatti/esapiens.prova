import { UserSearch } from 'types';
import ProfilePic from '../info/Picture';
import { userCardStyles } from '../styles';

interface UserCardProps {
    user: UserSearch;
}

export default function CardContainer(props: UserCardProps) {
    const { user } = props;
    const classes = userCardStyles();
    const clickUser = () => {
        window.location.assign(`/user/${user.login}`);
    }

    return (
        <div onClick={clickUser} className={classes.root}>
            <div className={classes.imgContainer}>
                <ProfilePic login={user.login} url={user.avatar_url} />
            </div>

            <div className={classes.infoContainer}><h3>{user.login}</h3>
                <p>ID: {user.id}</p></div>
        </div>
    )
}