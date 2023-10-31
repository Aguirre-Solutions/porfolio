import React from 'react';
import { Box, Grid, Chip } from '@mui/material';
import { StyledTypography, StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';

const ProjectDetailed = ({ project }) => {
    const {
        title,
        description,
        technologyStack,
        setup,
        usage,
        contributions,
        license,
    } = project;

    return (
        <Box component={Grid} container spacing={3}>

          
        </Box>
    );
};

export default ProjectDetailed;
