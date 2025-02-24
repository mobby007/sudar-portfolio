import Layout from "../../layouts";
import Bio from "./Bio";
import Contacts from "./Contacts";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Homepage() {
  return (
    <Layout>
      <Bio />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
    </Layout>
  )
}