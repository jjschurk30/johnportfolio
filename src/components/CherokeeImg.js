import React from 'react';


import Image from 'react-bootstrap/Image';

function CherokeeImg() {

return(

<div class="tooltip1 tooltip1-scroll">
  <Image className = "cherokee"src = {require("../images/cherokeeStreet.jpg")} alt = "cherokee street" roundedCircle
  fluid />
    <span class="tooltip1-text">
    <b>Cherokee Street Drum School</b>:
       <br />
   A mock drum school webpage built for my brother in React. Really enjoyed this project as it was a major
   introduction to React and furthered my programming skills.


    </span>
      </div>



);
}

export default CherokeeImg;