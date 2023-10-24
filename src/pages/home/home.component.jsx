import {Box, Grid} from '@mui/material';

import Details from '../../components/details/details.component';
import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import { useContext, useState, useEffect } from 'react';

import { ThemeValuesContext } from '../../context/theme-values.context';

import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';
import Skills from '../../components/skills/skills.component';


const Home = () => {

    const {theme, checks} = useContext(ThemeValuesContext);

    const [isMobile, isTablet, isLaptop, isDesktop] = checks;




    const [maxSkillCardHeight, setMaxSkillCardHeight] = useState(1050);
    const [maxExperienceCardHeight, setMaxExperienceCardHeight] = useState(1050);

    useEffect(() => {
        isMobile ? setMaxSkillCardHeight('auto') : isTablet ? setMaxSkillCardHeight(1350) : setMaxSkillCardHeight(1050);
        isMobile ? setMaxExperienceCardHeight('auto') : isTablet ? setMaxExperienceCardHeight(1350) : setMaxExperienceCardHeight(1050);

        }
    , [isMobile, isTablet]);



    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            
            {/* Details Component */}
            <Box component={Grid} item xs={12} md={3}>
                <Details theme={theme} checks={checks} />
            </Box>

            {isMobile ? 
            <Box component={Grid} item xs={12} md={1} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }}checks={checks}/>
             </Box>
            :
            <Box component={Grid} item md={1} display="flex" justifyContent="center">
                <StyledVerticalDivider checks={checks}/>
            </Box>
            }

            {/* AboutSnippet Component */}
            <Box component={Grid} item xs={12} md={5}>
                <AboutSnippet checks={checks}/>
            </Box>

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
                <Portfolio />
            </Box>
        </Grid>
    );
};

export default Home;
