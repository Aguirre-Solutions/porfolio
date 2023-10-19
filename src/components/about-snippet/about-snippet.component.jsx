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
                Hello, I'm Ruben, transitioning into a junior full stack developer role with a unique background in psychology, language education, and entrepreneurship in Mexico. 
                <br></br> <br></br>
                I've honed skills in adaptability, clear communication, and fresh innovation. Fluent in multiple languages and with a knack for designing user-friendly digital spaces, I combine empathy and strategy with a continuous drive to learn and streamline.
                <br></br> 
                [Continue Reading...]
                </StyledTypography>
            </Box>
        </Box>
    )
}

export default AboutSnippet;
