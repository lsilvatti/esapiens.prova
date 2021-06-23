import { searchFieldStyles } from './styles';

export default function SearchField(){

    const classes = searchFieldStyles();

    return (
        <div className={classes.root}>
            <input placeholder="Pesquisar usuário"  type="text" />
        </div>
        )
}