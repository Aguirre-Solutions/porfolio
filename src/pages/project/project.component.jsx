import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../context/project-data.component";
import { ThemeValuesContext } from "../../context/theme-values.context";

import { Grid } from "@mui/material";
import { StyledHorizontalDivider } from "../../utils/styledComponents";

import ProjectOverview from "../../components/project-overview/project-overview.component";
import ProjectDetailed from "../../components/project-detailed/project-detailed.component";


const Project = () => {
    const { id } = useParams();
    const {projectsData, technologyIcons} = useContext(ProjectDataContext);  
    const {checks, theme} = useContext(ThemeValuesContext);
    const project = projectsData.find((p) => p.id === parseInt(id, 10));

    const { isMobile, isTablet, isLaptop, isDesktop } = checks;
    

      
    
    
    
    return (   
        <Grid 
        container 
        spacing={3}  
        alignItems="center" 
        sx={{
            margin: 'auto',
            padding: isMobile ? '0' : '0 20px', 
            width: isTablet ? '100%' : '80%'
            
            }}>
            
            <ProjectOverview project={project} technologyIcons={technologyIcons} checks={checks} theme={theme}/>
            {/* Horizontal divider */}
            <Grid item xs={12} component={Grid} display="flex" justifyContent="center">
            <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
            </Grid>
    
            <ProjectDetailed project={project} theme={theme} checks={checks} />      
    
  
        </Grid>
        )
}

export default Project;