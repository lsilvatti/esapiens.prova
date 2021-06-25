import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { loadingStyles } from './styles';
export default function Loading(){

    const classes = loadingStyles();
    const [color] = useState("#1F7A8C");

    return (
        <div className={classes.root}>
            <PacmanLoader color={color} size={30} />
        </div>
        
    )
}