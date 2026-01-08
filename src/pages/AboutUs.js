import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import team from "../data/aboutUsPageLeadershipTeam";
import intro from "../data/aboutUsPageCompanyIntro";

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
        width: '100px', // Set the width of the line (2-3 characters long)
        backgroundColor: '#008080', // Use the chosen color
    },
}));

function AboutUs() {
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
                paddingTop: '2rem'
            }}
        >
            <Grid container spacing={2}
                sx={{
                    mt: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '79%'
                }}
            >
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
                    sx={{
                        mb: '3rem',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontFamily: 'Roboto-Slab',
                            mt: '1rem',
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
                        <OverlinedSpan>About C3</OverlinedSpan>
                    </Typography>
                    {intro.map((item, index) => (
                        item.type === "paragraph" ?
                            <Typography
                                key={index}
                                variant="h5"
                                sx={{
                                    color: 'grey.600',
                                    textAlign: { xs: 'justify', md: 'justify' },
                                    fontFamily: 'Roboto-Slab',
                                    mt: '1rem',
                                    mb: '2rem',
                                    fontSize: {
                                        xs: '1rem', // smaller on mobile
                                        sm: '1.2rem',
                                        md: '1.5rem',
                                        lg: '1.8rem',
                                        xl: '2rem'
                                    }
                                }}
                            >
                                {item.content}
                            </Typography>
                            :
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '600px'
                                }}
                            />
                    ))}
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontFamily: 'Roboto-Slab',
                            mt: '1rem',
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
                        <OverlinedSpan>Leadership Team</OverlinedSpan>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2}
                sx={{
                    mt: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%'
                }}
            >

                {team.map((person) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        key={person.name}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: {
                                    xs: '150px', // full width on mobile
                                    sm: '250px',
                                    md: '300px',
                                    lg: '400px'
                                },
                                height: {
                                    xs: 'auto',
                                    sm: '300px',
                                    md: '400px'
                                },
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={person.image}
                                alt=""
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '300px',
                                    borderRadius: '50%'
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto-Slab',
                                    mt: '1rem',
                                    fontSize: {
                                        xs: '1.2rem', // smaller on mobile
                                        sm: '1.4rem',
                                        md: '1.5rem',
                                    },
                                }}
                            >
                                {person.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'black',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto-Slab',
                                    mt: '1rem',
                                    fontSize: {
                                        xs: '1rem', // smaller on mobile
                                        sm: '1.1rem',
                                        md: '1.2rem',
                                    },
                                }}
                            >
                                {person.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AboutUs;