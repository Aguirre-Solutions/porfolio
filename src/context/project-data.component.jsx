import { useContext, createContext } from "react";
export const ProjectDataContext = createContext();
import { projectsData } from "../utils/portfoliodata";
import { technologyIcons } from "../utils/technologyIcons";

export const ProjectDataProvider = ({ children }) => {
    return (
        <ProjectDataContext.Provider value={{projectsData, technologyIcons}}> 
            {children}
        </ProjectDataContext.Provider>
    )
}
    