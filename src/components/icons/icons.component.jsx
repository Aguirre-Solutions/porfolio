import {TbBrandNodejs} from 'react-icons/tb';
import {SiMongodb, SiFirebase, SiReact, SiTypescript, SiGithub, SiRedux, SiMui} from 'react-icons/si';
import { Box, Grid } from "@mui/material";

const Icons = () => {
    const iconSize = 30;

    return (
        <Box display="flex" justifyContent="center" gap={2}>
            <Grid container spacing={4} justifyContent="center">
                {/* First Row */}
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiTypescript size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiReact size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiMui size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiRedux size={iconSize} />
                </Grid>

                {/* Second Row */}
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <TbBrandNodejs size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiMongodb size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiFirebase size={iconSize} />
                </Grid>
                <Grid item xs={1} sm={1} md={3} lg={1}>
                    <SiGithub size={iconSize} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Icons;
