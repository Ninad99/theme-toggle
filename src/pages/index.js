import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="w-full">
      <div className="mx-auto max-w-sm">
        <Image />
      </div>
    </div>
    <Link className="text-accent" to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
