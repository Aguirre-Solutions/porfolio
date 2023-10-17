import { ListItem, useTheme } from "@mui/material";
import { StyledTypography } from "../../utils/styledComponents";

const EducationItem = ({ degree, institution, graduationDate}) => {
  const theme = useTheme();
    return (
        <ListItem>
          <StyledTypography variant="h6" sx={{ color: theme.palette.error.main }}>{degree}</StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.additional.deepPurple }}>
              {institution} • {graduationDate}
          </StyledTypography>
        </ListItem>
      );
    }

export default EducationItem;