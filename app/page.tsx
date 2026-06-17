import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import About from "../components/About";
import Secretariat from "../components/Secretariat";
import Committees from "../components/Committees";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Secretariat />
      <Committees />
    </>
  );
}