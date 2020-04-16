import React from 'react';

import Image from 'react-bootstrap/Image';

function HullImg() {

return(



<div class="tooltip1 tooltip1-scroll">
<Image className = "hull"src = {require("../images/hully.jpg")} alt = "brett hull" roundedCircle fluid />

    <span class="tooltip1-text">
<b>Random Quote Machine</b>:

<br />
One of the first major projects I did in programming. It's an ugly page, but it's one of the proudest that I like to
display because I finished it and followed through. It was a major breakthrough in my coding journey. Plus,
the picture of Brett Hull at the Blues Stanley Cup parade makes my laugh and I smile every time I look at it.
    </span>
      </div>
);
}

export default HullImg;