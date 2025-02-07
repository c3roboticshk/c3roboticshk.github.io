import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { TableContainer, Table, TableBody, TableRow, TableCell} from "@mui/material";

import Logo from "../images/logo.png";

import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                //height: '100vh',
                width: '100%',
                bgcolor: "grey.500",
                overflow: 'hidden',
                paddingBottom: '2rem',
                paddingTop: '2rem'
            }}
        >
            <Grid container spacing={3}
                  sx={{
                      ml: '4rem',
                      mr: '4rem',
                      alignItems: 'center',
                  }}
            >
                <Grid container size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <img src={Logo} alt="logo"
                             style={{
                                 height: 'auto',
                                 width: '15rem',
                                 margin: '1%'
                             }}
                        />
                    </Grid>

                    <Grid size={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                        <SocialIcon url="https://www.linkedin.com/company/c3-construction-robotics-limited/"/>
                    </Grid>
                    <Grid size={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                        <SocialIcon url="https://www.youtube.com/watch?v=5DXR3lMrMCk"/>
                    </Grid>
                    <Grid size={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                        <SocialIcon url="mailto:info@c3robotics.com.hk"/>
                    </Grid>
                </Grid>

                <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'black',
                            textAlign: 'center',
                            marginBottom: '4%',
                            fontFamily: 'Roboto-Slab',
                            fontWeight: 'bold'
                        }}
                    >
                        Office:
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <PlaceIcon
                                            sx={{
                                                width: '2rem',
                                                height: '2rem',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="h7"
                                            sx={{
                                                color: 'black',
                                                textAlign: 'center',
                                                marginBottom: '4%',
                                                fontFamily: 'Roboto-Slab'
                                            }}
                                        >
                                            Unit 531, 5/F, Building 19W, <br/>
                                            Hong Kong Science Park, N.T., HK
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <LocalPhoneIcon
                                            sx={{
                                                width: '2rem',
                                                height: '2rem',
                                            }}
                                        />
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            variant="h7"
                                            sx={{
                                                color: 'black',
                                                textAlign: 'center',
                                                marginBottom: '4%',
                                                fontFamily: 'Roboto-Slab'
                                            }}
                                        >
                                            (+852) 6847 0993
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            <Typography
                variant="h7"
                sx={{
                    color: 'black',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontFamily: 'Roboto-Slab',
                    mt: "4rem"
                }}
            >
                © 2025 C3 Construction Robotics Limited. All Rights Reserved.
            </Typography>
        </Box>

    );
}

export default Footer;