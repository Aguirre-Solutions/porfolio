import {  Box } from '@mui/material';
import {StyledTypography} from '../../utils/styledComponents'
import Experience from '../../components/experience/experience.component'


const Resume = () => {
    return (
        <Box>
            <Box mb={3}>
              <StyledTypography variant="h1" sx={{textAlign:'center'}}>Resumé</StyledTypography>
            </Box>
            <Experience />
        </Box>
    )
}

export default Resume;
