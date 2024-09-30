import Container from "@/components/layouts/Container";
import Image from "next/image";
import Wireframe from '@/assets/decore/hero-Wireframe.svg'
export default function Home() {
  const heroTexts = ['Transforming ideas into Innovative Software',
    'Solutions, Your Trusted Development',
    'Partner Since 2016'
  ]
  return (
    <div>
      {/* hero */}
      <div className="relative my-20 py-20 ">
        <div className="absolute   w-full h-[500px] top-10">
          <Image src={Wireframe} alt="wireframe" className="w-full h-full  object-cover" />
        </div>
        <div className="absolute size-[200px] left-1/2 -translate-y-1/2 top-20 z-[-1]  bg-[--blue] blur-[300px]"></div>
        <Container>
          <div className="flex flex-col gap-10  items-center">
            <div>

            </div>
            <h1 className="text-5xl text-[--black] font-medium text-center  flex flex-col tracking-tighter">
              {
                heroTexts.map((text, i) => <span key={i}>{text}</span>)
              }
            </h1>
            <div className="flex gap-8">
              <button className="bg-[--blue] text-white px-6 py-3 rounded shadow-md shadow-[--blue]">Contact Now</button>
              <button className="bg-white text-[--blue] px-6 py-3 rounded shadow-md shadow-[--blue]">Learn More</button>
            </div>
          </div>
        </Container>

      </div>
    </div>
  );
}
