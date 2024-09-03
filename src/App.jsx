import Banner from "./components/Banner/Banner"
import Blogs from "./components/Blogs/Blogs"
import ClientReview from "./components/Client Review/ClientReview"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import OurServices from "./components/Our Services/OurServices"
import Process from "./components/Process/Process"
import WhoWeAre from "./components/Who We Are/WhoWeAre"
import WorKShowcase from "./components/Work Showcase/WorKShowcase"

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Banner className="" />
      </div>
      <OurServices />
      <WhoWeAre />
      <WorKShowcase />
      <Process />
      <ClientReview />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
