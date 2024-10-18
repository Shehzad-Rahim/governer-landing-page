import React from 'react'

function Content() {
  return (
    <div className='h-fit w-full pt-7 text-[#044e83]'>
      <h1 className='text-[3.7rem] whitespace-nowrap font-extrabold leading-none '>Governer Sindh</h1>
      <h1 className='text-[2.5rem] whitespace-nowrap font-normal'>Kamran Khan Tessori</h1>
      <h1 className='mt-5 leading-tight text-[#2eb6e8] text-[2.5rem] whitespace-nowrap font-bold'>
        Certified Cloud
        <br />
        Applied Generative AI
        <br />
        Engineer (GenEng)
      </h1>
      <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">Earn up to $5,000 / month</p>
      <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">Now admissions are open in Hyderabad</p>
      <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row gap-5"><a className="w-full md:w-auto" href="/apply">
      <button className="w-full bg-[#044e83] rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">APPLY NOW</button></a>
      
      <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
        <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
            <div className="w-40 font-extrabold">562,143</div>
        </div>
        <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">Accepted Applications</div></div></div>
    </div>
  )
}

export default Content
