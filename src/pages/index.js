import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Nabheet Madan - Always looking learn something new specially about technology and then sharing the experience. Learn->Share->Repeat.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
