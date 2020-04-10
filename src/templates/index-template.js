import React from 'react'
import Layout from '../components/Layout'
import CV from '../components/CV'
import { useSiteMetadata } from '../hooks'
import '../assets/css/init.css'

const IndexTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()

  return (
    <Layout title={siteTitle} description={siteSubtitle} keywords={keywords}>
      <CV />
    </Layout>
  )
}

export default IndexTemplate
