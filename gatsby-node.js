const path = require('path');

// Create pages dinamiclly
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const resp = await graphql(`
    query getProducts {
        products:allContentfulProduct {
          nodes {
            slug
          }
        }
      }
    `)

    resp.data.products.nodes.forEach(product => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: product.slug
            }
        })
    });
}