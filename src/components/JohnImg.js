import React from 'react';

import Image from 'react-bootstrap/Image';

function JohnImg() {

return(

<Image className = "John" src = {require("../images/john.jpg")} alt = "John" fluid />
);
}

export default JohnImg;