import {  Box } from '@mui/material';
import {StyledTypography} from '../../utils/styledComponents'
import Experience from '../experience/experience.component'


const Resume = ({theme}) => {
    return (
        <Box>
            <Experience theme={theme} />
        </Box>
    )
}

export default Resume;
