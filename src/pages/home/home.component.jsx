import {Box, Grid} from '@mui/material';

import Portfolio from '../portfolio/portfolio.component';
import Brief from '../brief/brief.component';
import { useContext, useState, useEffect } from 'react';

import { ThemeValuesContext } from '../../context/theme-values.context';

import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';

import CV from '../cv/cv.component';

const Home = () => {

    const {theme, checks} = useContext(ThemeValuesContext);

    const {isMobile, isTablet, isLaptop, isDesktop} = checks;




    const [maxSkillCardHeight, setMaxSkillCardHeight] = useState(1050);
    const [maxExperienceCardHeight, setMaxExperienceCardHeight] = useState(1050);

    useEffect(() => {
        isMobile ? setMaxSkillCardHeight('auto') : isTablet ? setMaxSkillCardHeight(900) : isLaptop ? setMaxSkillCardHeight(950) : isDesktop ? setMaxSkillCardHeight(850) : setMaxSkillCardHeight(850)

        isMobile ? setMaxExperienceCardHeight('auto') : isTablet ? setMaxExperienceCardHeight(900) : isLaptop ? setMaxExperienceCardHeight(950) : isDesktop ? setMaxExperienceCardHeight(850) : setMaxExperienceCardHeight(850)
        }
    , [checks]);



    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            
            <Brief theme={theme} checks={checks} />

            <Box component={Grid} item xs={12} display="flex" justifyContent="center" alignItems="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks}/>
            </Box>
            
            <CV theme={theme} maxSkillCardHeight={maxSkillCardHeight} maxExperienceCardHeight={maxSkillCardHeight} checks={checks}/>

            <Box component={Grid} item xs={12} display="flex" justifyContent="center" alignItems="center">
                <StyledHorizontalDivider sx={{ margin: '20px', width:'80%' }} />
            </Box>

                <Portfolio theme={theme} checks={checks} />
        </Grid>
    );
};

export default Home;
