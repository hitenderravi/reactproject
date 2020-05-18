import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from 'gatsby'
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import About from "./About"
import Coursecart from "../components/Cart/Coursecart"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
 
   <HeroSection
  img={ data.img.childImageSharp.fluid}

   title="I write code"
   subtitle="Learning coding is Fun"
   heroclass="hero-background"
   />
   <Infoblock heading="About Us"/>
   <Coursecart courses={data.courses}/>
   <DualInfoblock title="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges{
       node{
         id
         title
         price
         category
         description {
           description
         }
         image{
           fixed(width:200,
             height:120){
              ...GatsbyContentfulFixed_tracedSVG
           }
         }
       }
     }
     }
  }
`


export default IndexPage
