import React from "react";

import Card from "./cards.jsx";
//create your first component
const Cardsmul = () => {
	return (
    

    
    <div className="container text-center m-5">
  <div className="row">
    <div className="col">
	<Card/>
    </div>
    <div className="col">
    <Card/>
    </div>
    <div className="col">
	<Card/>
    </div>

    <div className="col">
	<Card/>
    </div>
  </div>
</div>


);
};

export default Cardsmul;