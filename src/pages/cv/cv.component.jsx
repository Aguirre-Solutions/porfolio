import {Box, Grid} from '@mui/material';
import Skills from '../../components/skills/skills.component'
import Experience from '../../components/experience/experience.component'

const CV = ({theme, cardHeight, checks}) => {
    return (
        <>
            <Grid container item xs={12} sm={12} md={12} lg={10} xl={8} spacing={3}>
                <Box component={Grid} item xs={12} md={4}>
                    <Skills theme={theme} maxCardHeight={cardHeight}  checks={checks}/>
                </Box>

                <Box component={Grid} item xs={12} md={8}>
                    <Experience theme={theme} maxCardHeight={cardHeight} checks={checks}/>
                </Box>
            </Grid>
        </>
    )
}

export default CV