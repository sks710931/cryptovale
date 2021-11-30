import {  ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Navbar } from './navbar';

interface Props {
    children: JSX.Element;
}

export const Layout = ({children}: Props): ReactElement<Props> => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.pages}>
            <Navbar/>
            <main>
                <div className={classes.content}>
                    {children}
                </div>
            </main>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    pages: {
      backgroundColor: '#ed3093',
      width: "100%",
      display: "flex",
    },
    content: {
        marginTop: '140px',
    }
}))