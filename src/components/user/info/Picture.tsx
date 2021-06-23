import { ProfilePicture } from 'types';
import { profilePictureStyles } from '../styles';


export default function ProfilePic(props: ProfilePicture){
    const { url, login } = props;
    const classes = profilePictureStyles();


    return (
        <img src={url} alt={login} className={classes.img} />
    )
}