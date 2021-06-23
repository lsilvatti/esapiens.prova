import {createUseStyles} from 'react-jss';


export const searchBarStyles = createUseStyles({
    root:{
        background: "#5492A2",
        padding: "15px 0px",
        display: "flex",
        justifyContent: "center",
    },
    container:{
        display: "flex",
        flexDirection: "row",
        '@media (min-width: 425px)':{
            width: "30vw",
        }
    }

})

export const searchFieldStyles = createUseStyles({
    root:{
        width:"100%",
        "& input":{
            width: "100%",
            fontSize: "18px",
            borderRadius: "20px",
            border: "0",
            background: "#ffffff77",
            fontFamily: "Open Sans",
            padding: "2px 0px 2px 10px",
            "&::placeholder":{
                color: "#ffffff99",
                textAlign: "center",
                fontSize: "16px",
            }
        }
       
    }
})