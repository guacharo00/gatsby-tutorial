import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Image from 'gatsby-image';

import './templates.css';

const ComponentName = ({ data: { product: { title, image, id, info, price } } }) => {

  // console.log(product)

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/products">Back to products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={image.fixed} alt={title}></Image>
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info.info}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getSingleProduct( $slug:String ) {
    product:contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width: 300){
          ...GatsbyContentfulFixed
        }
      }
      id
      info {
        info
      }
    }
  }
`

export default ComponentName
