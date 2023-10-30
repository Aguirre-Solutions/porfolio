import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../context/project-data.component";

import { Box } from "@mui/material";

import ProjectOverview from "../../components/project-overview/project-overview.component";
import ProjectDetailed from "../../components/project-detailed/project-detailed.component";


const Project = () => {
    const { id } = useParams();
    const projectsData = useContext(ProjectDataContext);
    const projectData = projectsData.find((p) => p.id === parseInt(id, 10));
    
    return (   
        <Box>   
            <ProjectOverview project={projectData} />
            <ProjectDetailed project={projectData} />        
        </Box>
        )
}

export default Project;