import { makeStyles, } from '@material-ui/core/styles';

import ColorSchema from './color';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            display: 'none',
        },
        backgroundColor: ColorSchema.primary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: ColorSchema.primary,
    },
    content: {
        flexGrow: 1,
        margin: 0,
        overflow: "hidden",
        height: "100vh",
        position: "relative"
    },
    button: {
        backgroundColor: ColorSchema.button,
        color: "white",
        width: "40%",
        marginTop: "10px",
    },
    headerDrawer: {
        fontSize: 40,
        paddingLeft: 30,
        paddingTop: 20,
        fontWeight: "bold"
    },
    margin: {
        margin: theme.spacing(1),
    },
    inputLabeL: {
        fontSize: 20,
        fontWeight: "bold"
    }
}));

export { useStyles }