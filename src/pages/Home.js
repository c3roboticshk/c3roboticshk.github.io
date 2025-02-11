import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

import AnimatedImage from "../components/AnimatedImage";
import InspectionIntro from "../components/InspectionIntro";
import PaintingIntro from "../components/PaintingIntro";

function Home() {
    const isMobile = useMediaQuery('(max-aspect-ratio: 1/1)');


    function scrollDown() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Container
                disableGutters
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40vh',
                    width: '100%',
                    //bgcolor: "blue",
                    minWidth: '100%',
                    overflow: 'hidden',
                    '@media (min-aspect-ratio: 1/1)': {
                        height: '90vh', // Height for when window width >= window height
                    },
                }}
            >
                <AnimatedImage />

                <Container
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40vh',
                        '@media (min-aspect-ratio: 1/1)': {
                            height: '90vh', // Height for when window width >= window height
                        },
                        minWidth: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <Typography
                        variant={isMobile ? "h6" : "h3"}
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '4%',
                            fontFamily: 'Roboto-Slab'
                        }}
                    >
                        Maximize Safety and Efficiency
                        <br/>
                        with Our Technologies
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '1.5rem',
                            fontFamily: 'Roboto-Slab',
                            textTransform: 'none',
                            borderRadius: '25px',
                            bgcolor: 'white',
                            color: 'black',
                        }}
                        onClick={scrollDown}
                    >
                        ⬇ Discover More ⬇
                    </Button>
                </Container>
            </Container>

            <InspectionIntro />

            <PaintingIntro />
        </>
    );
}

export default Home;