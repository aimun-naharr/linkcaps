import Container from "@/components/layouts/Container";
import Image from "next/image";
import Wireframe from '@/assets/decore/hero-Wireframe.svg'
import HeroCustomerAvatar from "@/components/home/HeroCustomerAvatar";
import Achievements from "@/components/home/Achivements";
import Services from "@/components/home/services";
import TeamMembers from "@/components/home/team-members";
import Testimonials from "@/components/home/testimonials";
import Contacts from "@/components/home/contacts";
export default function Home() {
  const heroTexts = ['Transforming ideas into Innovative Software',
    'Solutions, Your Trusted Development',
    'Partner Since 2016'
  ]
  return (
    <>
      <section className="relative ">
        <div className="absolute z-[-1]   w-full  top-0 xl:-top-1/2">
          <Image src={Wireframe} alt="wireframe" className="w-full h-full  object-cover" />
        </div>
        {/* hero */}
        <div className="relative my-20 py-20 ">

          <div className="absolute size-[200px] left-1/2 -translate-y-1/2 top-20 z-[-1]  bg-[--blue] blur-[300px]"></div>
          <Container>
            <div className="flex flex-col gap-8  items-center">
              <HeroCustomerAvatar />
              <h1 className="lg:text-5xl text-3xl text-[--black] font-medium text-center  flex flex-col tracking-tighter">
                <span>Transforming ideas into <span className="text-[--blue]">Innovative</span> Software</span>
                <span>Solutions, Your Trusted Development</span>
                <span>Partner Since 2016</span>
              </h1>
              <div className="flex gap-8">
                <button className="bg-[--blue] text-white px-6 py-3 rounded shadow-md shadow-[--blue]">Contact Now</button>
                <button className="bg-white text-[--blue] px-6 py-3 rounded shadow-md shadow-[--blue]">Learn More</button>
              </div>
            </div>

          </Container>
          <Achievements />

        </div>
      </section>
      <Services />
      <TeamMembers />
      <Testimonials />
      <Contacts />

    </>
  );
}
