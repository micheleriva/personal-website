import React from "react"
import Layout from "../components/layout"
import Hero from "../scenes/homepage/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Michele Riva | Software Engineer" />
    <Hero />
  </Layout>
)

export default IndexPage
