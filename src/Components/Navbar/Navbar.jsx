import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useStyles } from './NavbarStyle';
import { routers } from '../../Constant/Constant';
import ASSETS from '../../Assests';


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const classes = useStyles()
    return (
        <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", padding: "15px 0" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ color: "#472e8b" }}>
                    <Link to='/' className='link'>
                        <img src={ASSETS.LOGO} alt='' style={{ marginLeft: "-25px" }} />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="default"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {routers.map((page, index) => (
                                <Link to={page.path} key={index} className='link'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.tabLabel}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        className={classes.Heading}
                        href="/"
                        sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center" }}
                    >
                        {/* Fenix Insight */}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 4, justifyContent: "end" }}>
                        {routers.map((page, index) => (
                            <Link to={page.path} key={index} className='link'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    className={classes.Tabs}
                                >
                                    <Typography sx={{textTransform:"capitalize"}}>{page.tabLabel}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", }} ml={2} className={classes.loginresp}>
                        <Link to="/" className='link' >
                            <MenuItem className={classes.Login}>
                                <Typography >Log In</Typography>
                            </MenuItem>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;
