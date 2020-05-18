import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from 'gatsby'
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"
import BackgroundImage from 'gatsby-background-image'

const About = ({data}) => (
 
  <Layout>
    <SEO title="Home" />
   <HeroSection
  img={ data.img.childImageSharp.fluid}
   title="About My Website"
   subtitle=""
   heroclass="about-background"
   />
   <DualInfoblock title="A Message from CEO"/>

   <Infoblock heading="About Vision"/>
   <TeamPhotoSection/>
  </Layout>

)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


export default About
