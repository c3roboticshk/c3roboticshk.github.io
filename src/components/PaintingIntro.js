import Typography from "@mui/material/Typography";

import PaintingImg from '../images/homePage/painting.png';
import PainterIcon from '../images/homePage/painter_icon.png';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {styled} from "@mui/material/styles";

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
        width: '70px', // Set the width of the line (2-3 characters long)
        backgroundColor: '#008080', // Use the chosen color
    },
}));

function PaintingIntro() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                //height: '100vh',
                width: '100%',
                bgcolor: "grey.300",
                overflow: 'hidden',
                //padding: '1%'
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Roboto-Slab',
                    mt: '3rem',
                    mb: '1rem'
                }}
            >
                <OverlinedSpan>Outdoor Painting</OverlinedSpan>
            </Typography>
            <Grid container spacing={2}
                  sx={{
                      ml: '4rem',
                      mr: '4rem',
                      alignItems: 'center',
                  }}
            >
                <Grid size={{xs:12, sm:4, md:4, lg:4, xl:4}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: '1rem',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={PainterIcon}
                            alt="robot"
                            style={{
                                height: '64px',
                                width: '64px',
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'black',
                                textAlign: 'center',
                                fontFamily: 'Roboto-Slab',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >
                            RoboPainter
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'black',
                                textAlign: 'center',
                                marginBottom: '4%',
                                fontFamily: 'Roboto-Slab'
                            }}
                        >
                            Our painter robot is designed for outdoor painting,
                            offering unmatched efficiency and precision.
                            Leveraging advanced technology, it outperforms human workers
                            by covering larger areas in less time and reducing the risk of accidents for workers.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12, sm:8, md:8, lg:8, xl:8}}>
                    <img
                        src={PaintingImg}
                        alt="inspection"
                        style={{
                            height: 'auto',
                            width: '100%'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>

    );
}

export default PaintingIntro;