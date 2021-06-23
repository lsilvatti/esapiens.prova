import { searchBarStyles } from './styles';
import SearchField from './field';

export default function SearchBar() {
    const classes = searchBarStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}><SearchField /></div>
        </div>
    )
}