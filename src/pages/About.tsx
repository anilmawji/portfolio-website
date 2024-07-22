import ContactSection from "../components/sections/Contact"
import Timeline from "../components/sections/Timeline"

const About = () => {
  return (
    <div className="page">
      <section id="bio">
        Bio
      </section>
      <Timeline />
      <ContactSection />
    </div>
  )
}

export default About