"use client";
import Profile from './Api/Profile';
import Footer from './Components/Static/Footer';
import Header from './Components/Static/Header';
import Contact from './Components/Index/Contact';
import About from './Components/About/Text';
import Repositories from './Components/Index/Repo';
import Technologies from './Components/Index/Tech';

export default function Home() {
  return (

    <main className="container mx-auto">

      <Header />
      <div className="flex flex-col text-left pl-[20%] pt-[15%] min-h-screen">
        <Profile />
        <About />
        <Contact />
      </div>

      <Repositories />
      <Technologies />

      <Footer />
      <img className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg' src="/images/bgsss.svg" alt="" />
    </main>
    


  )
}
