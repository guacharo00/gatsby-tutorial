import React from 'react'
import Layout from '../components/Layout';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';

import { graphql } from 'gatsby';


const examples = ({ data }) => {

    console.log(data);

    return (
        <Layout>
            <p>Hi, from examples page</p>
            <p>{data.site.info.author}</p>
            <Header />
            <HeaderStatic />
        </Layout>
    )
}

export const data = graphql`
query MyQuery {
    site {
      info:siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples;