import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText } from "@mui/material";

import RoboPainterImg from "../images/productsPage/product2.jpg";

import highlights from "../data/painterPageHighlights";
import painterCases from "../data/painterPageCases";

const OverlinedSpan = styled('span')(({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '-15px', // Adjust this value to control the position of the line
        height: '5px', // Adjust this value to control the thickness of the line
        width: '60px', // Set the width of the line (2-3 characters long)
        backgroundColor: '#008080', // Use the chosen color
    },
}));

function RoboPainter() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                paddingBottom: '2rem',
                paddingTop: '4rem'
            }}
        >
            <Grid container spacing={1}
                  sx={{
                      ml: '2rem',
                      mr: '2rem',
                      //alignItems: 'center',
                  }}
            >
                <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: '1rem',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem',
                                mr: 'auto',
                                mb: '1rem',
                                fontSize: {
                                    xs: '2rem', // smaller on mobile
                                    sm: '2.5rem',
                                    md: '3rem',
                                    lg: '3.5rem',
                                    xl: '4rem'
                                }
                            }}
                        >
                            <OverlinedSpan>RoBosun-Painter</OverlinedSpan>
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                ml: '1rem',
                                fontSize: {
                                    xs: '1rem', // smaller on mobile
                                    sm: '1.2rem',
                                    md: '1.5rem',
                                    lg: '1.8rem',
                                    xl: '2rem'
                                }
                            }}
                        >
                            This advanced and versatile cable robot is designed to revolutionize outdoor painting,
                            providing unparalleled speed and consistency.
                            Engineered with cutting-edge technology,
                            this system offers significant time and cost savings.
                            The robot delivers a consistent paint quality that surpasses human capabilities,
                            all while eliminating the need for scaffolding or gondola setups.
                            This innovative solution ensures a safer and more efficient painting process,
                            protecting workers from hazardous exposure and reducing operational costs.
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem',
                                mt: '4rem',
                                mr: 'auto',
                                fontSize: {
                                    xs: '1.3rem', // smaller on mobile
                                    sm: '1.4rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem'
                                }
                            }}
                        >
                            Highlights
                        </Typography>

                        <List
                            sx={{
                                listStyleType: 'disc',
                                mr: 'auto'
                            }}
                        >
                            {highlights.map((highlight, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        display: 'list-item'
                                    }}
                                >
                                    <ListItemText
                                        primary={highlight}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Grid>
                <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <img
                        src={RoboPainterImg}
                        alt="robot"
                        style={{
                            height: 'auto',
                            width: '70%',
                        }}
                    />
                </Grid>

                <Grid size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: '1rem',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem',
                                mt: '4rem',
                                fontSize: {
                                    xs: '1.3rem', // smaller on mobile
                                    sm: '1.4rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem'
                                }
                                //mr: 'auto'
                            }}
                        >
                            Successful Cases
                        </Typography>
                    </Box>
                </Grid>

                {painterCases.map((painterCase, index) => (
                    <Grid
                        size={{xs:12, sm:3, md:3, lg:3, xl:3}}
                        key={index}
                    >
                        <img
                            src={painterCase}
                            alt={`case${index}`}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default RoboPainter;