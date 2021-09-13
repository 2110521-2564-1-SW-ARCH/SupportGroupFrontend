import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles, useTheme, withStyles, alpha } from '@material-ui/core/styles';

import ColorSchema from '../styles/color'

const drawerWidth = 400;

const Input = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 300,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

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
        color: "black"
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
        margin: "auto"
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

function Signup() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ height: "90%" }}>
            <div className={classes.headerDrawer}>
                Support
                <br />
                Group
            </div>
            <div className={classes.headerDrawer} style={{ color: "white", fontWeight: "bold" }}>
                Sign up
            </div>
            <center>
                <FormControl className={classes.margin}>
                    <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
                        Email
                    </InputLabel>
                    <Input placeholder="Email" id="bootstrap-input" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
                        Password
                    </InputLabel>
                    <Input type="password" placeholder="Password" id="bootstrap-input" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
                        Confirm Password
                    </InputLabel>
                    <Input type="password" placeholder="Confirm Password" id="bootstrap-input" />
                </FormControl>
                <br />
                <Button variant="contained" className={classes.button}>
                    Sign up
                </Button>
            </center>
        </div >
    );

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.inputLabeL}>
                        Support Group
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                        <IconButton onClick={handleDrawerToggle}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <img style={{ height: "105vh", zIndex: -1 }} src="https://s3-alpha-sig.figma.com/img/becd/b85e/2d68f0d0d3bc8944d250e65ec0432678?Expires=1632700800&Signature=fO8~tgADk7CmcaCJhPeP5wTMPUVKzMbnKet2u0Tz2ikt7MTKliF0J32H4jQStHr6YqSDAjZ6OnVrLBuHeKbo16ShSJethXF7HRDHiw9dYIeyowabyW9D5w83veSkcBRzj9XRhNV~-MuwT4H8h-Yt3vEjW6uM-FC-8ybmu9yLDhHzhoF3nu9UAPlUFelDga3GkK5pR~nQPe1xAoqpwV99ClcdSnMWRZZCJVipYSJ5OxFxRkz-moUKjx4nMC-NyuR4r5UFYt1~OgXi53jBQP5KwaMcupcFuxw1wiKQqdswLcQFXFRK23AloZb6TRndT4GvMGsxPBQ0BmJXmKuRSRFooQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Support Group" />
                <div style={{ position: "absolute", left: "50%", top: "40vh", transform: "translate(-50%, -50%)", color: "white", fontSize: 80 }}>
                    Welcome
                    <br />
                    About us
                </div>
            </main>
        </div>
    );
}

export default Signup;
