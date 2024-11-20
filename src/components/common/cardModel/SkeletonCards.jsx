import { Skeleton } from "@mui/material";
import { cardStyle } from "./cardModel";

const SkeletonCards = () => {
    return (
        <>
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
            <Skeleton sx={cardStyle} variant="rectangular" />
        </>
    );
};

export default SkeletonCards;
