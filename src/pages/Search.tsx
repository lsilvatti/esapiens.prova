import { searchStyles } from './styles';

import SearchField from "components/search/field";


export default function Search(){
    const classes = searchStyles();
    return (
            <div className={classes.container}>
            <SearchField />
            </div>
    )
}