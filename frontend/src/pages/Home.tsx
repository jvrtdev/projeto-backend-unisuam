import Customers from "@/components/Customers/Customers"
import FastMarquee from "@/components/FastMarquee/FastMarquee"
import Footer from "@/components/Footer/Footer"
import MainSection from "@/components/MainSection/MainSection"


const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center pt-5" >
        <MainSection/>  
    </div>
    <div className="flex items-center justify-center pt-5" >
        <FastMarquee/>
    </div>
    <div className="flex items-center justify-center pt-5" >
        <Customers />
    </div>
    <div className="flex items-center justify-center pt-5" >
        <Footer />
    </div>
    </>
  )
}

export default Home