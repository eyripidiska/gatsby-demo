import React from 'react'
import Layout from './../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby';

export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portofolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>{projects.map(project =>(
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}</div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
  </Layout>
  )
}

// export page query
export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        date
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`