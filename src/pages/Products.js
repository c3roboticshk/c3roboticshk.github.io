import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import  { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

import prodictList from "../data/productsPageList";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '100%',
        width: '100% !important', // Overrides inline-style
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    }
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function Products(props) {
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
                paddingTop: '2rem'
            }}
        >
            <Grid container spacing={2}
                  sx={{
                      mt: '1rem',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      width: '100%'
                  }}
            >
                {prodictList.map((product) => (
                    <Grid size={{xs:12, sm:6, md:6, lg:6, xl:6}}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                          }}
                          key={product.title}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                height: 'auto'
                            }}
                        >
                            <ImageButton
                                focusRipple
                                key={product.title}
                                style={{
                                    width: '400px',
                                    height: '400px'
                                }}
                                onClick={() => setCurrPage(product.title)}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${product.url})` }} />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        sx={(theme) => ({
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: `calc(${theme.spacing(1)} + 6px)`,
                                        })}
                                    >
                                        {product.title}
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </Image>
                            </ImageButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Products;