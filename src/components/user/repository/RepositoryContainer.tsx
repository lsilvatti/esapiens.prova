import { Repository } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { repositorySectionStyles } from '../styles';

interface RepositoryProps {
    repo: Repository;
}

export default function RepositoryContainer(props: RepositoryProps) {
    const { repo } = props;
    const classes = repositorySectionStyles();

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <h3>{repo.name}</h3>
                <div>
                <h5>{repo.full_name}</h5>
                <h6>{repo.language}</h6>
                </div>

            </div>
            <div className={classes.right}>
                <div className={classes.stat}>
                    <span>{repo.watchers_count}</span>
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <div className={classes.stat}>
                    <span>{repo.stargazers_count}</span>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>

           
        </div>
    )
}