import React from 'react'
import { Layout, BackTop } from 'antd'
import Header from './Header'
import Sidebar from '../Sidebar'
import TopSkills from './TopSkills'
import SkillList from './SkillList'
import Experience from './Experience'
import PitchLine from './PitchLine'
import Certificates from './Certificates'
import Education from './Education'
import Projects from './Projects'
import Footer from './Footer'
import { useSiteMetadata } from '../../hooks'

const { Content } = Layout

const CV = () => {
  const { author } = useSiteMetadata()

  return (
    <>
      <Sidebar hideMobile={true} />
      <Content className="m-2 main-container">
        <Header />
        <PitchLine />
        {/* <TopSkills /> */}
        <SkillList />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Footer contacts={author.contacts} />
      </Content>
      <BackTop />
    </>
  )
}


export default CV
