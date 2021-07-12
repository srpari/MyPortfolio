import * as React from "react";
// import {Link} from 'gatsby';
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page" pageHeading="Home">
    <p>Welcome to my Gatsby site !</p>     
    <StaticImage src="../images/robot.png" alt="A dinosaur"
     loading="eager" 
     placeholder="blurred" 
     layout="constrained"
     />  
    <StaticImage src="https://placekitten.com/800/600" alt="A dinosaur"
     placeholder="tracedSVG"
     layout="fullWidth"
      />
    </Layout>  
  );
};
export default HomePage;