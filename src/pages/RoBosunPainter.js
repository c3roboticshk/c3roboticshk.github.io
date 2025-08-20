import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

import highlights from "../data/robosunPainterHighlights";
import awards from "../data/painterPageAwards";
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
        width: '100px', // Set the width of the line (2-3 characters long)
        backgroundColor: '#008080', // Use the chosen color
    },
}));

function RoBosunPainter() {
    return (
        <>
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
                                mt: '1rem',
                                mb: '1rem',
                                fontSize: {
                                    xs: '1rem', // smaller on mobile
                                    sm: '1.2rem',
                                    md: '1.5rem',
                                    lg: '1.5rem',
                                    xl: '1.5rem'
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
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#c5c5c5',
                    py: '3rem',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: '#000000ff',
                        //textAlign: 'left',
                        fontFamily: 'Roboto-Slab',
                        fontWeight: 'bold',
                        ml: '1rem',
                        mr: 'auto',
                        fontSize: {
                            xs: '1.3rem', // smaller on mobile
                            sm: '1.4rem',
                            md: '1.7rem',
                            lg: '2rem',
                            xl: '2.2rem'
                        },
                        textDecoration: 'underline'
                    }}
                >
                    Highlights
                </Typography>
            </Box>

            {highlights.map((highlight, index) => (
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: highlight.backgroundColor,
                        py: '3rem',
                    }}
                    key={index}
                >
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ columnGap: {md: "4rem", lg: "8rem"} }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ textAlign: 'center', order: { xs: 2, md: highlight.imagePlacement === "left" ? 0 : 2 } }}
                        >
                            <img
                                src={highlight.image}
                                alt={highlight.imageAlt}
                                style={{
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto',
                                }}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ order: { xs: 1, md: 1 } }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {highlight.title.map((title, titleIndex) => (
                                    <Card
                                        elevation={3}
                                        sx={{
                                            borderRadius: '12px',
                                            width: '100%',
                                            maxWidth: '300px',
                                            mx: 'auto'
                                        }}
                                        key={"card-" + titleIndex}
                                    >
                                        <CardContent>
                                            <Typography variant="h6" sx={{ fontFamily: 'Roboto-Slab', mb: '1rem', fontWeight: 'bold', }}>
                                                {title}
                                            </Typography>
                                            <Typography sx={{ fontFamily: 'Roboto', color: '#555' }}>
                                                {highlight.description[titleIndex]}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}

            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#ffffff',
                    py: '3rem',
                }}
            >
                <Grid container spacing={1}
                        sx={{
                            ml: '2rem',
                            mr: '2rem',
                            //alignItems: 'center',
                            justifyContent: 'center',
                        }}
                >

                    <Grid size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                mb: '1rem',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#000000ff',
                                    //textAlign: 'left',
                                    fontFamily: 'Roboto-Slab',
                                    fontWeight: 'bold',
                                    ml: '1rem',
                                    mr: 'auto',
                                    fontSize: {
                                        xs: '1.3rem', // smaller on mobile
                                        sm: '1.4rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem'
                                    },
                                    textDecoration: 'underline'
                                }}
                            >
                                Awards
                            </Typography>
                        </Box>
                    </Grid>

                    {awards.map((award, index) => (
                        <Grid
                            size={{xs:12, sm:3, md:3, lg:3, xl:3}}
                            key={index}
                        >
                            <Card sx={{ maxWidth: 345, mx: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={award.img}
                                    alt={award.alt}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                    {award.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                    <Grid size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: '1rem',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#ffffff',
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'black',
                                    textAlign: 'center',
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
                                    },
                                    textDecoration: 'underline'
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
                                    height: 'auto',
                                    maxWidth: '300px',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default RoBosunPainter;