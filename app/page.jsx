import Servicios from "@/components/homePage/Servicios";
import FixedBg from "@/components/shared/FixedBg";
import Beneficios from "@/components/homePage/Beneficios";
import Hero from "@/components/homePage/Hero";
import Mensaje from "@/components/homePage/Mensaje";
import Stats from "@/components/homePage/Stats";


const HomePage = () => {
  return (
    <>
      <FixedBg img="/imgs/asesoriasImg.jpg"/>
      <Hero />
      <Beneficios />
      <Stats />
      <Servicios />
      <Mensaje />
    </>
  );
};

export default HomePage;
