import Asesorias from "@/components/home/Asesorias";
import Beneficios from "@/components/home/Beneficios";
import Hero from "@/components/home/Hero";
import Mensaje from "@/components/home/Mensaje";
import Stats from "@/components/home/Stats";


const HomePage = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Stats />
      <Asesorias />
      <Mensaje />
    </>
  );
};

export default HomePage;
