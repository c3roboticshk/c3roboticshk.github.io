import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";

import RoboTapperImg from "../images/tapperPage/roboTapper.png";

import highlights from "../data/tapperPageHighlights";
import awards from "../data/tapperPageAwards";
import tapperCases from "../data/tapperPageCases";

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

function RoboTapper(props) {
    const setCurrPage = props.setCurrPage;

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
                      ml: '8rem',
                      mr: '8rem',
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
                            variant="h4"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem',
                                mr: 'auto',
                                mb: '1rem'
                            }}
                        >
                            <OverlinedSpan>RoboTapper</OverlinedSpan>
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                ml: '1rem'
                            }}
                        >
                            This innovative and feature-rich cable robot is designed
                            to provide unparalleled solutions for facade inspection,
                            offering unmatched flexibility and efficiency.
                            Engineered with advanced technology,
                            this system seamlessly integrates into your existing infrastructure.
                            This lightweight system ensures easy setup without
                            the need for mounting fixtures on the building,
                            significantly enhancing safety and efficiency in the inspection process.
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
                                mr: 'auto'
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
                                    <ListItemText primary={highlight} />
                                </ListItem>
                            ))}
                        </List>

                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                textAlign: 'left',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem',
                                mt: '4rem',
                                mr: 'auto'
                            }}
                        >
                            Awards
                        </Typography>

                        <List
                            sx={{
                                listStyleType: 'disc',
                                mr: 'auto'
                            }}
                        >
                            {awards.map((award, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        display: 'list-item'
                                    }}
                                >
                                    <ListItemText primary={award} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Grid>
                <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <img
                        src={RoboTapperImg}
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
                                //mr: 'auto'
                            }}
                        >
                            Successful Cases
                        </Typography>

                        <Button
                            sx={{
                                ml: '1rem',
                                mt: '4rem',
                                textTransform: 'none',
                                bgcolor: 'grey.400',
                                color: 'white'
                            }}
                            onClick={() => setCurrPage('Our Cases')}
                        >
                            More
                        </Button>
                    </Box>
                </Grid>

                {tapperCases.map((tapperCase, index) => (
                    <Grid
                        size={{xs:12, sm:3, md:3, lg:3, xl:3}}
                        key={index}
                    >
                        <img
                            src={tapperCase}
                            alt={`case${index}`}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default RoboTapper;