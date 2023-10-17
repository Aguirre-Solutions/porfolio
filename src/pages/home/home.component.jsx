import {Box, Grid} from '@mui/material';
import { StyledHorizontalDivider } from '../../utils/styledComponents';

import Details from '../../components/details/details.component';
import About from '../about/about.component';
import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import { useContext } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.component';

const Home = () => {

    const theme = useContext(ThemeValuesContext);


    return (
        <Grid container justifyContent="center" alignItems="center">
            <Box component={Grid} item xs={12} md={6}>
                <Details />
            </Box>
            <Box component={Grid} item xs={12} md={6}>
                <About />
            </Box>
            <Box component={Grid} item xs={12}>
                <StyledHorizontalDivider sx={{ margin: '20px' }} />
            </Box>
            <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Portfolio />
            </Box>
            <Box component={Grid} item xs={12}>
                <StyledHorizontalDivider sx={{ margin: '20px' }} />
            </Box>
            <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Experience theme={theme}/>
            </Box>
        </Grid>
    );
};

export default Home;
