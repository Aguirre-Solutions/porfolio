import { Box } from '@mui/material';
import {StyledTypography} from '../../utils/styledComponents'

const AboutSnippet = () => {
    return (
        <Box mt={2}>
            <Box mb={3}>
                <StyledTypography variant="h3">About Me</StyledTypography>
            </Box>
            <Box>   
                <StyledTypography variant="body1" sx={{fontSize:'20px'}}>
                Hello, I'm Ruben, a junior full stack developer with a unique background in psychology, language education, and entrepreneurship in Mexico. 
                <br></br> 
                My journey embodies adaptability, clear communication, and innovation. Fluent in multiple languages and passionate about crafting intuitive digital spaces, I blend empathy, strategic thinking, and a relentless drive to learn and simplify.
                <br></br> <br></br>
                [Continue Reading...]
                </StyledTypography>
            </Box>
        </Box>
    )
}

export default AboutSnippet;
