import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout";
import Image from 'gatsby-image';

import styles from './products.module.css';

const ComponentName = ({ data }) => {

    const { allContentfulProduct: { nodes: products } } = data;
    console.log(products)

    return (
        <Layout>
            <section className={styles.page}>
                {products.map(({ title, price, slug, id, image }) => (
                    <article key={id}>
                        <Image fluid={image.fluid} alt={title}></Image>
                        <h1>{title} <span>${price}</span></h1>
                        <Link to={`/products/${slug}`}>More details</Link>
                    </article>
                ))}
            </section>
        </Layout>
    )

}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        id
      }
    }
  }
`

export default ComponentName
