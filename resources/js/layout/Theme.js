const themeConfig = (theme) => {
    const drawerWidth = 240;
    return {
        root: { display: 'flex', zIndex: 500 },
        toolbar: { paddingRight: 24 },
        toolbarLogo: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px',width:'100%' },
        toolbarIcon: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px', ...theme.mixins.toolbar, },
        appBar: {
            zIndex: theme.zIndex.drawer + 5,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            // marginLeft: `${drawerWidth}px !important`, 
            width: `calc(100% - ${drawerWidth}px) !important`,
            width:`-webkit-calc(100% - ${drawerWidth}px) !important`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: { marginRight: 36, }, menuButtonHidden: { display: 'none', }, 
        title : { flexGrow: 1, },
        username : { fontSize: '1rem' },
        drawerPaper: {
            position:'inherit !important',
            whiteSpace: 'nowrap', width: drawerWidth, transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp, 
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: { width: theme.spacing(9), },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: { flexGrow: 1, height: '100vh', overflow: 'auto'},
        container: { 
            marginLeft:'inherit !important',
            paddingTop: theme.spacing(5), 
            paddingBottom: theme.spacing(4), 
            paddingRight: theme.spacing(3), 
            paddingLeft: theme.spacing(1), 
        },
        paper: { padding: theme.spacing(2), display: 'flex', overflow: 'auto', flexDirection: 'column'}, 
        fixedHeight: { height: 240, },
        dialog: { zIndex: '750', width: '100%' }
    }
}
export default themeConfig;