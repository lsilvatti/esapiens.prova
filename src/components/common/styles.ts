import { createUseStyles } from 'react-jss';

export const errorStyles = createUseStyles({

    empty:{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        minHeight: "300px",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        '& svg': {
            opacity: 0.4,
        },
        '& span':{
            marginTop: 20,
            opacity: 0.4,
        }
    }
})

export const loadingStyles = createUseStyles({
    root:{
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})