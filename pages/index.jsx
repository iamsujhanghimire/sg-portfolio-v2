import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
    {/* Head */}
    <Head>
      <title>Sujhan Ghimire</title>
      <link rel="icon" type="image/x-icon" href="./favicon.png"></link>
    </Head>
    {/* NavBar */}
    <Navbar/> 
    {/* Hero */}
    <Hero/>
    {/* About */}
    <About/>
    {/* Experience */}
    {/* <Experience/> */}
    {/* Works */}
    {/* <Works/> */}
    {/* Contact */}
    <Contact/>
      </>
  )
}
