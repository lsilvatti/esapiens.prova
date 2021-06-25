import { errorStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

interface ErrorProps {
    message: string
}

export default function ReturnError(props: ErrorProps){

    const { message } = props
    const classes = errorStyles();
    
    return(
        <div className={classes.empty}>
              <FontAwesomeIcon icon={faSadCry} size="5x" />
              <span>{message}</span>
          </div>
    )
}