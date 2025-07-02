import Layout from '../components/Layout/Layout'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <Layout >
      <Hero />
      <About />
      <Projects />
      <Skills />
    </Layout>
  )
}
