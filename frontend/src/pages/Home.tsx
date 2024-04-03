import FastMarquee from "@/components/FastMarquee/FastMarquee"
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
    </>
  )
}

export default Home