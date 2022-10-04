import React from "react";


//create your first component
const Cards = () => {
	return (

<div className="text-center">
<div className="card m-2">
  <img src="https://static3.lasprovincias.es/www/multimedia/202201/01/media/cortadas/gato-afp-kC5C-U160421350059bfB-624x385@Las%20Provincias.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
	);
};

export default Cards;