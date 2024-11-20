import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const UserWidget = () => {
    return (
        <>
            <Link to="/login">
                <IconButton sx={{ margin: "20px" }} aria-label="cart">
                    <PersonIcon />
                </IconButton>
            </Link>
        </>
    );
};

export default UserWidget;
