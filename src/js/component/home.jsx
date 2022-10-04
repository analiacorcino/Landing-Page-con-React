import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotroon from "./jumbotroon.jsx";
import Footer from "./footer.jsx";
import Cardsmul from "./cardsmul.jsx";




//create your first component
const Home = () => {
	return (
		< >
		<Navbar/>
		<div className="container">
		<div className="row">
		<Jumbotroon/>
		<Cardsmul/>
		</div>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
