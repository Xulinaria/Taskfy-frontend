import Header from '@/components/home/Header'
import Motivational from '@/components/home/Motivational'
import AboutApplication from '@/components/home/AboutApplication'
import Possibilities from '@/components/home/Possibilities'
import AboutUs from '@/components/home/AboutUs'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="dark:bg-black">
        <Motivational />
        <AboutApplication />
        <Possibilities />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}
