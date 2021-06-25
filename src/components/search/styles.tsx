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
        margin: "0 10px",
        "& button":{
            marginLeft: 20
        },
        '@media (min-width: 426px)':{
            width: "30vw",
        }
    }

})

export const searchFieldStyles = createUseStyles({
    root:{
        width:"100%",
        "& input":{
            width: "95%",
            fontSize: "18px",
            borderRadius: "20px",
            border: "0",
            background: "#ffffff77",
            fontFamily: "Open Sans",
            padding: "2px 10px 2px 10px",
            "@media (min-width: 4266px)":{
                padding: "2px 0px 2px 10px",
            },
            "&::placeholder":{
                color: "#ffffff99",
                textAlign: "center",
                fontSize: "16px",
            }
        }
       
    }
})

export const buttonStyles = createUseStyles({
    root:{
        width: "120px",
        borderRadius: "20px",
        border: "none",
        padding: "5px 20px",
        fontFamily: 'Open Sans',
        "&:hover":{
            background:"#d5d5d5"
        }
    }
})