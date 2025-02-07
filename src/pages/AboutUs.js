import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import team from "../data/aboutUsPageLeadershipTeam";

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
                      width: '60%'
                  }}
            >
                <Grid size={{xs:12, sm:12, md:12, lg:12, xl:12}}
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
                            mb: '1rem'
                        }}
                    >
                        <OverlinedSpan>About C3</OverlinedSpan>
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'grey.600',
                            textAlign: 'left',
                            fontFamily: 'Roboto-Slab',
                            mt: '1rem',
                            mb: '1rem'
                        }}
                    >
                        Founded on robust university research,
                        our company is at the forefront of providing
                        innovative automated robotic solutions
                        for the construction industry.
                        By leveraging cutting-edge technology and academic excellence,
                        we aim to revolutionize construction site operations
                        making them safer and more efficient.
                        Our advanced robots are designed to tackle challenging tasks,
                        reducing risks for human workers and enhancing productivity on construction sites.
                    </Typography>
                </Grid>

                <Grid size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontFamily: 'Roboto-Slab',
                            mt: '1rem',
                            mb: '1rem'
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
                    <Grid size={{xs:12, sm:4, md:4, lg:4, xl:4}}
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
                                width: '500px',
                                height: '500px',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={person.image}
                                alt=""
                                style={{
                                    height: '400px',
                                    width: '400px',
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
                                    mb: 'auto',
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
                                    mb: 'auto'
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