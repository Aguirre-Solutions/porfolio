import {Box, Grid} from '@mui/material';

import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import Brief from '../brief/brief.component';
import { useContext, useState, useEffect } from 'react';

import { ThemeValuesContext } from '../../context/theme-values.context';

import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';
import Skills from '../../components/skills/skills.component';


const Home = () => {

    const {theme, checks} = useContext(ThemeValuesContext);

    const [isMobile, isTablet, isLaptop, isDesktop] = checks;




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

            <Box 
                component={Grid} 
                item xs={12} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks}/>
            </Box>
            
            {/* Skills and Experience Component */}
            <Grid container item xs={12} sm={12} md={12} lg={10} xl={8} spacing={3}>
                <Box component={Grid} item xs={12} md={4}>
                    <Skills theme={theme} maxCardHeight={maxSkillCardHeight}  checks={checks}/>
                </Box>

                <Box component={Grid} item xs={12} md={8}>
                    <Experience theme={theme} maxCardHeight={maxExperienceCardHeight} checks={checks}/>
                </Box>
            </Grid>
            <Box 
                component={Grid} 
                item xs={12} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <StyledHorizontalDivider sx={{ margin: '20px', width:'80%' }} />
            </Box>
            <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Portfolio theme={theme} checks={checks} />
            </Box>
        </Grid>
    );
};

export default Home;
