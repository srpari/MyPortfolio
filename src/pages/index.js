import * as React from "react";
// import {Link} from 'gatsby';
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page" pageHeading="Home">
    <p>Welcome to my Gatsby site !</p>  
    <StaticImage src="https://placekitten.com/800/600" alt="A dinosaur" />
    </Layout>  
  );
};
export default HomePage;