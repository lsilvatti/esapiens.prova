import {createUseStyles} from 'react-jss';


export const userPageStyles = createUseStyles({
})

export const homeStyles = createUseStyles({
    root:{
        width:"100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '@media (min-width: 425px)':{
            width: "30vw",
        },
        "& img":{
            maxWidth: 250,
            marginBottom: 100
        }
    },

})
