import {createUseStyles} from 'react-jss';


export const userPageStyles = createUseStyles({
    root:{
        
    }
})

export const searchStyles = createUseStyles({
    root:{
        width:"100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        '@media (min-width: 425px)':{
            width: "30vw",
        },
        width:"100%"
    }
})
