import {Box, Grid, useMediaQuery} from '@mui/material';

import Details from '../../components/details/details.component';
import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import { useContext, useState, useRef, useEffect } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.component';
import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';
import Skills from '../../components/skills/skills.component';


const Home = () => {
    const theme = useContext(ThemeValuesContext);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [maxCardHeight, setMaxCardHeight] = useState(0);

    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const skillsHeight = skillsRef.current ? skillsRef.current.offsetHeight : 0;
            const experienceHeight = experienceRef.current ? experienceRef.current.offsetHeight : 0;
            const newMaxHeight = Math.max(skillsHeight, experienceHeight);

            setMaxCardHeight(Math.max(skillsHeight, experienceHeight));
            if(newMaxHeight !== maxCardHeight) setMaxCardHeight(newMaxHeight);
        };
    
        // Initialize the heights initially
        handleResize();
    
        // Create and set up the observer
        const resizeObserver = new ResizeObserver(handleResize);
        if (skillsRef.current && experienceRef.current) {
            resizeObserver.observe(skillsRef.current);
            resizeObserver.observe(experienceRef.current);
        }
    
        // Clean up the observer when the component unmounts
        return () => {
            if (skillsRef.current) resizeObserver.unobserve(skillsRef.current);
            if (experienceRef.current) resizeObserver.unobserve(experienceRef.current);
        };
    }, [maxCardHeight]);
    


    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            
            {/* Details Component */}
            <Box component={Grid} item xs={12} md={3}>
                <Details theme={theme} />
            </Box>

            {isMobile ? 
            <Box component={Grid} item xs={12} md={1} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} />
             </Box>
            :
            <Box component={Grid} item md={1} display="flex" justifyContent="center">
                <StyledVerticalDivider />
            </Box>
            }

            {/* AboutSnippet Component */}
            <Box component={Grid} item xs={12} md={5}>
                <AboutSnippet />
            </Box>

            <Box 
                component={Grid} 
                item xs={12} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <StyledHorizontalDivider sx={{ width:'80%' }} />
            </Box>
            
            {/* Skills and Experience Component */}
            <Grid container item xs={12} sm={12} md={12} lg={10} xl={8} spacing={3}>
                <Box component={Grid} item xs={12} md={4}>
                    <Skills theme={theme} maxCardHeight={maxCardHeight} skillsRef={skillsRef}/>
                </Box>

                <Box component={Grid} item xs={12} md={8}>
                    <Experience theme={theme} maxCardHeight={maxCardHeight} experienceRef={experienceRef}/>
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
