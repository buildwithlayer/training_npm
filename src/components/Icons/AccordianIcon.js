import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/material";

const AccordianIcon = () => {
    return (
        <Box
            sx={{
                '.Mui-expanded & > .collapsIconWrapper': {
                    display: 'none',
                },
                '.expandIconWrapper': {
                    display: 'none',
                },
                '.Mui-expanded & > .expandIconWrapper': {
                    display: 'block',
                },
            }}
        >
            <div className="expandIconWrapper">
                <RemoveIcon />
            </div>
            <div className="collapsIconWrapper">
                <AddIcon />
            </div>
        </Box>
    )
}

export default AccordianIcon;