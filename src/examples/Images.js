import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import img from '../images/image-3.jpeg';

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image-3.jpeg"}) {
      childImageSharp {
        fixed (grayscale:true){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image-4.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {

    const { fixed: { childImageSharp: { fixed } }, fluid: { childImageSharp: { fluid } } } = useStaticQuery(getImages);

    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
                <img src={img} />
            </article>
            <article className="single-image">
                <h3>Fixed image/blur</h3>
                <Image fixed={fixed}></Image>
            </article>
            <article className="single-image">
                <h3>Fluid image/svg</h3>
                <Image fluid={fluid}></Image>
            </article>
        </section>
    )
}

export default Images;
