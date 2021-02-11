import React from "react";

const ImageDropdown = ({handleDropdown}) => {
    return (
    <select name="images" id="images" onChange={handleDropdown}>
        <option value="butterfly">Butterfly</option>
        <option value="bridge">Bridge</option>
        <option value="pineneedles">Pine needles</option>
        <option value="motorbike">Motorbike</option>
        <option value="mountains">Mountains</option>
    </select>
    );
};

export default ImageDropdown;