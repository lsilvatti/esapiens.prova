import {createUseStyles} from 'react-jss';


export const profilePictureStyles = createUseStyles({
    img:{
        borderRadius: 100,
        maxWidth: 180,
        maxHeight: 180,
        objectFit: "cover"
    }
})

export const repositorySectionStyles = createUseStyles({
    root: {
        minHeight: 57,
        display:"flex",
        backgroundColor: "#666",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        boxShadow: "10px 10px 18px -13px rgba(0,0,0,0.37)",
        color: "white",
        cursor: "pointer",
        "&:hover":{
            backgroundColor:"#777"
        },
        "&:active":{
            backgroundColor:"#888"
        }
    },
    info:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    right:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        '& div':{
            margin: "0px 10px"
        }
    },
    stat:{
        display:"flex",
        alignItems: "center",
        '& span': {
            marginRight: 5,
        }
    },
})
 
export const userInfoStyles = createUseStyles({
    root:{
        backgroundColor: "#1F7A8C"
    },
    container:{
        display:"flex",
        padding: 25,
        maxWidth: "1600px",
        margin: "0 auto",
        position: "relative",
        alignItems: "center",
        flexWrap: "wrap",
        color: "white",
        '@media(max-width: 425px)':{
            textAlign: "center",
            justifyContent: "center"
        },
    },
    info:{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        marginLeft:30,
        "& span":{
            marginBottom: 10,
        }
    }
})

export const repositoryGridClasses = createUseStyles({
    wrapper:{
        maxWidth: "1080px",
        margin: "50px auto 0 auto",
        color: "white",
        '& h1' :{
            color: "white",
            marginBottom: 10,
            marginLeft: 10,
            '@media(max-width: 425px)':{
                textAlign: "center"
            }
        }
    },
    header:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, 
    select:{
        "& select":{
            marginLeft:10
        }
    },
    container:{
        display: "flex",       
        flexFlow: "row wrap",
        justifyContent: "flex-start",
        '&::-webkit-scrollbar': {
            width: "9px",
            height: "9px",
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#bdbdbd",
            borderRadius: "15px",
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: "#adadad",
          },
          '&::-webkit-scrollbar-track': {
            background: "#ffffff1a",
            borderRadius: "15px",
          },
          '@media(min-width: 425px)':{
            maxHeight: "55vh",
            overflow: "hidden auto",
          }
        
    },
    item:{
        flexBasis: "100%",
        "-ms-flex": "auto",
        padding: "10px",
        boxSizing: "border-box",
        '@media(min-width: 1073px)':{
            flexBasis: "33.33%",
        },
        '@media(min-width: 815px)':{
            flexBasis: "50%",
        }
    },
})