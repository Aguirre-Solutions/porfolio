import {styled} from "@mui/material/styles";
import { Toolbar, Divider } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: '48px !important',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '& .MuiTypography-root': {
        fontFamily: 'Cormorant',
    },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginLeft: '10px',
    marginRight: '10px',
    height: '50px',    // change as needed
    width: '1px',
}));
