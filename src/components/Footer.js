import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { TableContainer, Table, TableBody, TableRow, TableCell} from "@mui/material";

import Logo from "../images/logo.png";

import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '100%',
                bgcolor: 'grey.500',
                overflow: 'hidden',
                py: {
                    xs: '1rem',
                    sm: '2rem'
                }
            }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    px: {
                        xs: '1rem',
                        sm: '4rem'
                    },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    margin: '0 auto'
                }}
            >
                {/* Logo + Social Icons */}
                <Grid xs={12} sm={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            padding: '1rem 0',
                            }}
                    >
                        {/* Logo */}
                        <Box sx={{ mb: '1rem' }}>
                            <img
                                src={Logo}
                                alt="logo"
                                style={{
                                    width: '10rem',
                                    maxWidth: '100%',
                                    }}
                            />
                        </Box>

                        {/* Social Icons */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <SocialIcon
                                url="https://www.linkedin.com/company/c3-construction-robotics-limited/"
                                style={{ height: 30, width: 30 }}
                            />
                            <SocialIcon
                                url="https://www.youtube.com/watch?v=5DXR3lMrMCk"
                                style={{ height: 30, width: 30 }}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* Office Info */}
                <Grid xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'black',
                            textAlign: 'center',
                            mb: '1rem',
                            fontFamily: 'Roboto-Slab',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: '1rem',
                                sm: '1.2rem'
                            }
                        }}
                    >
                        Office:
                    </Typography>

                    <TableContainer>
                        <Table size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ borderBottom: 'none', width: '2rem' }}>
                                        <PlaceIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: 'none' }}>
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                textAlign: 'left',
                                                fontFamily: 'Roboto-Slab',
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                }
                                            }}
                                        >
                                            Unit 655, 6/F, Building 19W, <br />
                                            Hong Kong Science Park, N.T., HK
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ borderBottom: 'none', width: '2rem' }}>
                                        <LocalPhoneIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }}>
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                textAlign: 'left',
                                                fontFamily: 'Roboto-Slab',
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                }
                                            }}
                                        >
                                            (+852) 6847 0993
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ borderBottom: 'none', width: '2rem' }}>
                                        <EmailIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }}>
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                textAlign: 'left',
                                                fontFamily: 'Roboto-Slab',
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                }
                                            }}
                                        >
                                            info@c3robotics.com.hk
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            {/* Copyright */}
            <Typography
                sx={{
                    color: 'black',
                    textAlign: 'center',
                    fontFamily: 'Roboto-Slab',
                    mt: '2rem',
                    fontSize: {
                        xs: '0.8rem',
                        sm: '1rem'
                    }
                }}
            >
                © 2025 C3 Construction Robotics Limited. All Rights Reserved.
            </Typography>
        </Box>
    );
}

export default Footer;