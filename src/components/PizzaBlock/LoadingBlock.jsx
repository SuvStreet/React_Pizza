import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="130" r="120" />
            <rect x="0" y="275" rx="6" ry="6" width="283" height="20" />
            <rect x="0" y="305" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="410" rx="6" ry="6" width="80" height="31" />
            <rect x="126" y="401" rx="25" ry="25" width="154" height="48" />
        </ContentLoader>
    );
}

export default LoadingBlock;
