import Typography from "@mui/material/Typography";

import InspectionImg from '../images/homePage/inspection.png';
import RobotIcon from '../images/homePage/robot_icon.png';
import AnalysisImg from '../images/homePage/analysis.png';
import AIIcon from '../images/homePage/ai_icon.png';

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

function InspectionIntro(props) {
    const inspectionRef = props.inspectionRef;

    return (
        <Box
            ref={inspectionRef}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                //height: '100vh',
                width: '100%',
                //bgcolor: "blue",
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
                <OverlinedSpan>Facade Inspection</OverlinedSpan>
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
                            src={RobotIcon}
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
                            RoboTapper
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
                            Our advanced facade inspection robots are designed to
                            ensure the safety and integrity of building exteriors.
                            By utilizing cutting-edge technology,
                            our robots can perform detailed inspections,
                            identifying potential issues before they become major problems.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12, sm:8, md:8, lg:8, xl:8}}>
                    <img
                        src={InspectionImg}
                        alt="inspection"
                        style={{
                            height: 'auto',
                            width: '100%'
                        }}
                    />
                </Grid>

                <Grid size={{xs:0, sm:8, md:8, lg:8, xl:8}}>
                    <img
                        src={AnalysisImg}
                        alt="inspection"
                        style={{
                            height: 'auto',
                            width: '100%'
                        }}
                    />
                </Grid>

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
                            src={AIIcon}
                            alt="ai-icon"
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
                            AI Analysis
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
                            Our advanced sound analysis system leverages AI to meticulously analyze audio data,
                            identifying defect areas with precision.
                            The system automatically generates comprehensive reports,
                            ensuring swift and efficient defect management.
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{xs:12, sm:0, md:0, lg:0, xl:0}}>
                    <img
                        src={AnalysisImg}
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

export default InspectionIntro;