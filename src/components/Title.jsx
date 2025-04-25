//Title
//Contains the title of the main page
import React from "react";

import titletext from '/title-text.png';

export default function Title() {
    return (
        <div className="flex justify-center mb-6">
            <img src={titletext} className="w-full" />
        </div>
    )
}