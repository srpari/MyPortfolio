import * as React from "react";
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
   <Layout pageTitle="Contact Us" pageHeading="Contact">
       <p>Please drop email @ pari@mail.com</p>
       
       <StaticImage src="../images/robot.png" alt="A dinosaur" />  
   </Layout>
  );
};
export default ContactPage;