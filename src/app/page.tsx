import Header from "@/components/Header";
import Content from '../components/Content';
import Cover from "@/components/Cover";


export default function Home() {
  return (
    <div className="relative md:mt-[76px] sm:mt-16 mt-14 z-0 w-full overflow-hidden bg-opacity-75 bg-[url('https://www.governorsindh.com/bg_house.jpg')] bg-cover">
    <Header />
    <div id="container" className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

    <div className="z-50 m-auto mt-6 block w-[95%] md:flex md:flex-row items-center justify-between lg:w-[90%] xl:w-[1300px]">
        <Content />
   
    <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
      <Cover />
    </div>
    </div>
      
      
    </div>
    

  )
}
