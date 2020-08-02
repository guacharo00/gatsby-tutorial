import React from "react"
import "../global.css"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Button } from "../components/Button"


export default () => (<div>
    <Layout>
        <h1>Hola Mundo!</h1>
        <Button>Click me</Button><br />
        <a href="https://gatsbyjs.org">Gatsby docs</a>
    </Layout>
</div>)
