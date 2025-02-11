import { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


import tapperCases from "../data/casesPageTapperCases";
import painterCases from "../data/casesPagePainterCases";

function Cases() {
    const [currProduct, setCurrProduct] = useState('RoboTapper');

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
                <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <Button
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            bgcolor: currProduct === "RoboTapper" ? 'grey.400' : 'grey.100',
                        }}
                        onClick={() => setCurrProduct('RoboTapper')}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontFamily: 'Roboto-Slab',
                                mt: '1rem',
                                mb: '1rem'
                            }}
                        >
                            RoboTapper
                        </Typography>
                    </Button>
                </Grid>

                <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}>
                    <Button
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            bgcolor: currProduct === "RoboPainter" ? 'grey.400' : 'grey.100',
                        }}
                        onClick={() => setCurrProduct('RoboPainter')}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontFamily: 'Roboto-Slab',
                                mt: '1rem',
                                mb: '1rem'
                            }}
                        >
                            RoboPainter
                        </Typography>
                    </Button>
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
                {(currProduct === "RoboTapper" ? tapperCases : painterCases).map((c) => (
                    <Grid size={{xs:12, sm:4, md:4, lg:4, xl:4}}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                          }}
                          key={c.location}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '500px',
                                height: '350px',
                                bgcolor: 'grey.200',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                paddingTop: '1rem'
                            }}
                        >
                            <img
                                src={c.image}
                                alt=""
                                style={{
                                    height: '300px',
                                    width: '350px'
                                }}
                            />
                            <Typography
                                variant="h7"
                                sx={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto-Slab',
                                    mt: '1rem',
                                    mb: 'auto'
                                }}
                            >
                                {c.location}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Cases;