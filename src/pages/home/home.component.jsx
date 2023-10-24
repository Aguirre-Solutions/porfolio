import { useContext, useState, useEffect } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.context';

import {Box, Grid} from '@mui/material';
import {  StyledHorizontalDivider } from '../../utils/styledComponents';

import Portfolio from '../portfolio/portfolio.component';
import Brief from '../brief/brief.component';
import CV from '../cv/cv.component';

import { getCardHeight } from '../../utils/deviceHelpers';

const Home = () => {

    const {theme, checks} = useContext(ThemeValuesContext);

    const {isMobile, isTablet, isLaptop, isDesktop} = checks;




    const [maxSkillCardHeight, setMaxSkillCardHeight] = useState(1050);
    const [maxExperienceCardHeight, setMaxExperienceCardHeight] = useState(1050);
    
    useEffect(() => {
        const heightForSkills = getCardHeight(isMobile, isTablet, isLaptop, isDesktop);
        const heightForExperience = getCardHeight(isMobile, isTablet, isLaptop, isDesktop);

        setMaxSkillCardHeight(heightForSkills);
        setMaxExperienceCardHeight(heightForExperience);
    }, [checks]);



    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            
            <Brief theme={theme} checks={checks} />

            <Box component={Grid} item xs={12} display="flex" justifyContent="center" alignItems="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks}/>
            </Box>
            
            <CV theme={theme} maxSkillCardHeight={maxSkillCardHeight} maxExperienceCardHeight={maxExperienceCardHeight} checks={checks}/>

            <Box component={Grid} item xs={12} display="flex" justifyContent="center" alignItems="center">
                <StyledHorizontalDivider sx={{ margin: '20px', width:'80%' }} />
            </Box>

                <Portfolio theme={theme} checks={checks} />
        </Grid>
    );
};

export default Home;
