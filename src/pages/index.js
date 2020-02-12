import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"

import data from "../data/data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cards data={data} />
  </Layout>
)

export default IndexPage
