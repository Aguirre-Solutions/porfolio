import { useContext, createContext } from "react";
export const ProjectDataContext = createContext();
import { projectsData } from "../utils/portfoliodata";

export const ProjectDataProvider = ({ children }) => {
    return (
        <ProjectDataContext.Provider value={projectsData}> 
            {children}
        </ProjectDataContext.Provider>
    )
}
    