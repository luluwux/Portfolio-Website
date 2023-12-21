"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Profile from './Api/Profile';
import Footer from './Components/Static/Footer';
import Header from './Components/Static/Header';
import Contact from './Components/Index/Contact';
import About from './Components/About/Text';
import { motion } from "framer-motion";
import { useScrollReveal } from './Components/hooks';

// Luludan Selam
const Repositories = dynamic(() => import('./Components/Index/Repo'), { ssr: false });
const Technologies = dynamic(() => import('./Components/Index/Tech'), { ssr: false });

export default function Home() {
  const controls = useScrollReveal();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="container mx-auto">
      <Header />
      <div className={`flex flex-col items-left text-center ${isSmallScreen ? 'items-center' : 'items-left'} pl-[5%] pt-[35%] sm:pt-48 min-h-screen`}>
        <Profile />
        <About />
        <Contact />
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={"controls"}
        className="animation"
      >
        <Repositories />
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={"controls"}
        className="animation"
      >
        <Technologies />
      </motion.div>

      <Footer />
      <img className='absolute top-0 right-0 hidden overflow-hidden select-none lg:block blur-lg' src="/images/bgsss.svg" alt="" />
    </main>
  );
}
