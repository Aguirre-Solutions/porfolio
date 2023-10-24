import Details from '../../components/details/details.component';
import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import { StyledHorizontalDivider, StyledVerticalDivider } from '../../utils/styledComponents';
import { Box, Grid } from '@mui/material';

const Brief = ({theme, checks}) => {

    const {isMobile, isTablet, isLaptop, isDesktop} = checks;

    return (
        <>
            {/* Details Component */}
            <Box component={Grid} item xs={12} md={3}>
                <Details theme={theme} checks={checks} />
            </Box>

            {isMobile ? 
            <Box component={Grid} item xs={12} md={1} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks} />
             </Box>
            :
            <Box component={Grid} item  ml={isTablet ? 3 : 0 }  md={1} display="flex" justifyContent="center">
                <StyledVerticalDivider checks={checks} />
            </Box>
            }

            {/* AboutSnippet Component */}
            <Box component={Grid} item xs={12} md={5}>
                <AboutSnippet checks={checks} />
            </Box>
        </>
    )
}

export default Brief;