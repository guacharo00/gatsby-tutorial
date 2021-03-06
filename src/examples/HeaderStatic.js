import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
    <StaticQuery
        query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
        render={data => <h3>{data.site.info.description}</h3>}
    ></StaticQuery>
)

export default HeaderStatic
