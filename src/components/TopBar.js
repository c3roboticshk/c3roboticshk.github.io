import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';

import {useState, useRef} from "react";
import Logo from "../images/logo.png";

const pages = ['Home', 'Products', 'Our Cases', 'About Us'];
const products = ['RoboTapper', 'RoboPainter'];

function TopBar(props) {
    const setCurrPage = props.setCurrPage;

    const [anchorElNav, setAnchorElNav] = useState(null);

    const [openProdList, setOpenProdList] = useState(false);

    const prodAnchorRef = useRef(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function toggleProdList(){
        setOpenProdList((prevOpen) => !prevOpen);
    }

    function handleCloseProdList(event) {
        if(prodAnchorRef.current && prodAnchorRef.current.contains(event.target)){
            return;
        }
        setOpenProdList(false);
    }

    function changePage(page){
        setCurrPage(page);
        setAnchorElNav(null);
    }

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: 'white',
                height: "10vh",
                minHeight: '10vh',
                }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} alt="logo"
                         style={{
                             height: '100%',
                             width: '200px',
                             margin: '1%'
                        }}
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="extra-large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
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
                                display:{
                                    xs: 'block',
                                    md: 'none'
                                }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => {changePage(page)} }>
                                    <Typography sx={{
                                        textAlign: 'center',
                                        color: '#000000',
                                        fontFamily: 'Roboto-Slab'
                                        }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            page === 'Products' ? (
                                <div key={page}>
                                    <Button
                                        ref={prodAnchorRef}
                                        id="products-btn"
                                        aria-controls={openProdList ? 'product-menu' : undefined}
                                        aria-expanded={openProdList ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={() => {changePage(page)}}
                                        onMouseEnter={() => {toggleProdList()}}
                                        onMouseLeave={() => {toggleProdList()}}
                                        sx={{
                                            my: 2,
                                            mx: 3,
                                            color: '#000000',
                                            display: 'block',
                                            height: '3rem',
                                            fontSize: '1.2rem',
                                            textTransform: 'none',
                                            fontFamily: 'Roboto-Slab'
                                        }}
                                    >
                                        {page}
                                    </Button>

                                    <Popper
                                        open={openProdList}
                                        anchorEl={prodAnchorRef.current}
                                        role={undefined}
                                        placement='bottom-start'
                                        transition
                                        disablePortal
                                        onMouseEnter={() => {toggleProdList()}}
                                        onMouseLeave={() => {toggleProdList()}}
                                        sx={{
                                            zIndex: 1
                                        }}
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                sx={{
                                                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={(e) => {handleCloseProdList(e)}}>
                                                        <MenuList
                                                            autoFocusItem={openProdList}
                                                            id="product-menu"
                                                            aria-labelledby="products-btn"
                                                        >
                                                            {products.map((product) => (
                                                                <MenuItem key={product} onClick={() => {changePage(product)} }>
                                                                    <Typography sx={{
                                                                        textAlign: 'center',
                                                                        color: '#000000',
                                                                        fontFamily: 'Roboto-Slab'
                                                                    }}>
                                                                        {product}
                                                                    </Typography>
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </div>
                            ) : (
                                <Button
                                    key={page}
                                    onClick={() => {changePage(page)}}
                                    sx={{
                                        my: 2,
                                        mx: 3,
                                        color: '#000000',
                                        display: 'block',
                                        height: '3rem',
                                        fontSize: '1.2rem',
                                        textTransform: 'none',
                                        fontFamily: 'Roboto-Slab'
                                    }}
                                >
                                    {page}
                                </Button>
                            )
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopBar;