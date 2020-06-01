import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Div>
      <Image />
    </Div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

const Div = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default IndexPage
