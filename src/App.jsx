import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div className='flex items-center justify-center my-auto min-h-screen bg-[#101010]'>
            <div className=''>
                <div className='flex items-center justify-center my-[20px]  '>
                  <div className=' relative'>
                  <div>
                    <img src="src/assets/avatar1.png" className='h-[65px] w-[65px] rounded-full border-[5px] border-zinc-300' alt="" />
                    </div><div className='absolute -top-6 -right-6'>
                    <svg width="40px" height="40px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" fill="#f91f1f" stroke="#f91f1f" transform="matrix(-1, 0, 0, -1, 0, 0)rotate(270)" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#dedede" d="M255.4 31.96a224 224 0 0 0-62.1 8.96A224 224 0 0 0 40.97 318.7 224 224 0 0 0 318.7 471 224 224 0 0 0 471 193.2 224 224 0 0 0 256 31.96a224 224 0 0 0-.6 0zm-.6 38.97c80.5-.56 155.1 52.07 178.8 133.27 28.6 98-27.8 200.8-125.8 229.4-98 28.5-200.8-27.8-229.39-125.8C49.82 209.7 106.2 106.9 204.2 78.36c16.8-4.91 33.8-7.32 50.6-7.43zm.1 17.98c-15.1.11-30.5 2.29-45.7 6.73C120.6 121.5 69.84 214.1 95.69 302.7 121.5 391.3 214.1 442.1 302.8 416.3c88.6-25.9 139.4-118.5 113.5-207.1-21.4-73.4-88.5-120.83-161.4-120.29zm45 62.69c10.7.2 20.5 7.3 23.6 18 3.9 13.1-3.8 27.2-17 31-13.1 3.8-27.1-3.9-31-17-3.8-13.2 3.9-27.2 17-31 2.5-.7 5-1 7.4-1zm-.2 18c-.7 0-1.4.1-2.1.3-3.9 1.1-5.9 4.8-4.8 8.7 1.1 3.8 4.8 5.8 8.7 4.7 3.8-1.1 5.9-4.8 4.7-8.7-.9-3.1-3.5-5-6.5-5zm-124.5 17.9h1.9c10.6.2 20.4 7.3 23.5 17.9 3.9 13.2-3.8 27.2-17 31-13.1 3.9-27.1-3.8-31-17-3.8-13.1 3.9-27.1 17-31 1.9-.5 3.7-.8 5.6-.9zm1.6 17.9c-.7 0-1.4.1-2.1.3-3.9 1.1-5.9 4.9-4.8 8.7 1.1 3.8 4.9 5.9 8.7 4.8 3.8-1.2 5.9-4.9 4.8-8.7-.9-3.1-3.6-5.1-6.6-5.1zm159 69.1c10.6.2 20.5 7.3 23.6 18 3.8 13.1-3.9 27.1-17 31-13.2 3.8-27.2-3.9-31-17-3.9-13.2 3.8-27.2 17-31 2.4-.7 4.9-1.1 7.4-1zm-.8 18c-.6 0-1.1.1-1.6.3-3.8 1.1-5.9 4.8-4.8 8.6 1.2 3.9 4.9 5.9 8.7 4.8 3.9-1.1 5.9-4.8 4.8-8.7-.9-3.1-3.6-5-6.6-5h-.5zm-122.1 17.8c10.6.3 20.5 7.3 23.6 18 3.8 13.2-3.9 27.2-17 31-13.2 3.9-27.2-3.8-31-17-3.8-13.1 3.8-27.1 17-31 2.5-.7 4.9-1 7.4-1zm-.2 18c-.7 0-1.5.1-2.2.3-3.8 1.1-5.9 4.8-4.7 8.7 1.1 3.8 4.8 5.9 8.6 4.7 3.9-1.1 5.9-4.8 4.8-8.6-.9-3.2-3.5-5.1-6.5-5.1z"></path></g></svg>
                    
                    
                    
                    
                    </div>
</div>

                    </div>
                  <h1 className='my-[5px] md:my-[10px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[500] text-zinc-100 text-center'>So. Welcome.</h1>
                  <p className=' my-[5px] md:my-[15px] text-[18px]  md:text-[22px] lg:text-[24px] xl:text-[26px] text-zinc-400 text-center'>Chandan's portfolio</p>
                  <button className='my-[5px] md:my-[10px] flex items-center justify-center py-[5px] px-[10px] md:py-[8px] md:px-[15px] text-[12px] md:text-[18px] border-[2px] border-blue-500 text-blue-700  text-center mx-auto bg-blue-200  rounded-[10px]'>Download CV</button>
               

            </div>
      </div>
      <div className='bg-[#101010]'>
      <div className='bg-[#101010] mx-[4px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px] min-h-screen brder-[#212121] rounded-[15px] sm:rounded-[22px] md:rounded-[30px] '>
      <h1 className='p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300'>About</h1>
      
        <div className='  p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] border-zinc-600 border-[1px] rounded-[5px] sm:rounded-[10px] md:rounded-[15px] lg:rounded-[20px]'>
            <div className=''>
        
        <div className=' sm:p-[25px] md:p-[35px] lg:p-[45px] xl:p-[55p5] w-full inline-block '>
        <div className='my-[10px] w-full flex justify-end'>
    <div className='flex items-end'>
      <p className='leading-[20px] ml-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]'>Hyy.</p>
      <img src="src/assets/avatar1.png" className='sm:ml-[10px] md:ml-[15px] ml-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
    </div>
  </div>

  <div className='my-[10px] w-full flex'>
    <div className='flex items-end'>
      <img src="src/assets/avatar1.png" className='sm:mr-[10px] md:mr-[15px] mr-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
      <p className='leading-[20px] mr-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]'>Hyy.</p>
    </div>
  </div>

  <div className='my-[10px] w-full flex justify-end'>
    <div className='flex items-end'>
      <p className='leading-[20px] ml-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]'>Lorem, ipsum dolor.</p>
      <img src="src/assets/avatar1.png" className='sm:ml-[10px] md:ml-[15px] ml-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
    </div>
  </div>

  <div className='my-[10px] w-full flex'>
    <div className='flex items-end'>
      <img src="src/assets/avatar1.png" className='sm:mr-[10px] md:mr-[15px] mr-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
      <p className='leading-[20px] mr-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
    </div>
  </div>
  
  <div className='my-[10px] w-full flex justify-end'>
    <div className='flex items-end'>
      <p className='leading-[20px] ml-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]'>Lorem, ipsum Lorem ipsum dolor sit amet..</p>
      <img src="src/assets/avatar1.png" className='sm:ml-[10px] md:ml-[15px] ml-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
    </div>
  </div>

  <div className='my-[10px] w-full flex'>
    <div className='flex items-end'>
      <img src="src/assets/avatar1.png" className='sm:mr-[10px] md:mr-[15px] mr-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
      <p className='leading-[20px] mr-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error eum minima illo odio quos est porro iusto. Nemo, officiis!
        .</p>
    </div>
  </div>
  
  <div className='my-[10px] w-full flex justify-end'>
    <div className='flex items-end'>
      <p className='leading-[20px] ml-[55px] text-[14px] md:text-[16px]  py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]'>Lorem, ipsum dolor Lorem, ipsum dolor..</p>
      <img src="src/assets/avatar1.png" className='sm:ml-[10px] md:ml-[15px] ml-[5px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700' alt="" />
    </div>
  </div>


</div>
</div>
        </div>
        

      </div></div>



      <section id="education" class="md:min-h-screen md:pt-[150px] bg-[#101010]">
           
           <div class="ml-[20px] mr-[5px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px]">
              <h1 className='p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300'>Education.</h1>
      
             
             <div class="flex flex-col md:grid grid-cols-9 m-auto p-2 text-blue-50 ">
            
             <div class="flex fleow-reverse md:contents">
               <div class="col-start-1 col-end-3  mx-auto relative mr-10">
                 <div class="h-full w-6 flex items-center justify-center">
                   <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                 </div>
                 <div
                   class="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-blue-500 shadow"
                 >2019-20</div>
               </div>
               <div
                 class="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                 <h3 class="font-semibold text-blue-500 text-md sm:text-lg mb-1">10th,H.P. Board</h3>
                 <p class="leading-tight text-sm sm:text-md text-justify">
                   Complete 10th, from Govt. Sr. Sec. school Dandroo, Hamirpur (H.P.) with 77%.
                 </p>
               </div>
               
             </div>
             
             <div class="flex fleow-reverse md:contents">
               <div class="col-start-1 col-end-3 mx-auto relative mr-10">
                 <div class="h-full w-6 flex items-center justify-center">
                   <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                 </div>
                 <div
                   class="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-blue-500 shadow"
                 >202-22</div>
               </div>
               <div
                 class="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                 <h3 class="font-semibold text-blue-500 text-md sm:text-lg mb-1">12th,H.P. Board</h3>
                 <p class="leading-tight text-sm sm:text-md text-justify">
                 Complete 12th, from Govt. Sr. Sec. school Jaure Amb, Hamirpur (H.P.) with 75%.
                 </p>
               </div>
               
             </div>
            
             <div class="flex fleow-reverse md:contents">
               <div class="col-start-1 col-end-3 mx-auto relative mr-10">
                 <div class="h-full w-6 flex items-center justify-center">
                   <div class="h-full w-1 bg-gray-50 pointer-events-none"></div>
                 </div>
                 <div
                   class="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-gray-50 text-blue-500 border-[3px] border-zinc-500 shadow"
                 >2022-24</div>
               </div>
               <div
                 class="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                 <h3 class="font-semibold text-blue-500 text-md sm:text-lg mb-1">Diploma in Information Technology</h3>
                 <p class="leading-tight text-sm sm:text-md text-justify">
                      Pursuing diploma from Govt. Polytechnic Hamirpur (H.P.) (Result Pending).
                 </p>
               </div>
               
             </div>
             
             
           </div>
           </div>
         
      </section> 


    <div className=' pt-[70px] min-h-screen bg-[#101010] text-zinc-200'>
        <div className='mx-[4px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px] p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px]'>
          <h1 className='mb-[30px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300'>Projects</h1>
          <div className=''>
              <div className=' min-h-[300px] max-w-[500px] sm:max-w-[900px] mx-auto border-[1px] sm:grid grid-cols-2  p-[20px] border-zinc-600 rounded-[8px]'>

                                          
                <div className='relative h-full w-full'>
                          <img src="src/assets/travelhub_home.png" className='sm:rounded-l-[8px] sm:rounded-tr-[0px] rounded-t-[10px] h-full w-full' alt="" />
                          
                          <div className='absolute w-full py-[5px] px-[10px]  bottom-0 bg-[rgba(0,0,0,0.7)]'>
                            <div className=' w-full flex justify-between '>
                               
                               
                            <svg width="40px" height="40px" className='hover:scale-[1.08]' viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f5f5f5" stroke-width="2.112"><path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path></g><g id="SVGRepo_iconCarrier"><path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path></g></svg>
                                
                                


                              <button data-modal-target="default-modal" data-modal-toggle="default-modal" class=" text-zinc-50 text-[26px] hover:scale-[1.08]" type="button">
                                Preview
                              </button>

                              <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                  <div class="relative p-4 w-full max-w-2xl mx-h-full">
                                      
                                      <div class="relative bg-[#101010] rounded-lg shadow border-zinc-600 border-[3px]">
                                        
                                          <div className=''>
                                                <h1 className='text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-zinc-100 font-[500]'>Travelhub.</h1>
                                                <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[400] text-zinc-300'>A platform to collect infomation for planning tours.</p>
                  

                                          </div>
                  
                                          <div id="default-carousel" class="relative w-full" data-carousel="static">
                                              
                                              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                                   
                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>Landing Page Start</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/travelhub_home.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/travelhub_home2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/travelhub_home3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/travelhub_home4.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>
                                                   
                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>Destination Page Start.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/destination.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/destination1.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>


                                                  
                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>Blog Page Start.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/blog.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/blog1.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>


                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>Tour Booking Page Start.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/tour.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/tour2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/tour3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>To create tour for booking page.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/tour-create.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>To write content about destination page.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>
                                                  
                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/destination-create.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out bg-[#101010]  w-full h-full" data-carousel-item>
                                                      <div className='w-full h-full flex items-center justify-center'>
                                                        <div className='inline-block'>
                                                          <h1 className='w-full text-center text-zinc-100 text-[26px]'>To write blogs for share journey page.</h1>
                                                          <p className='text-[14px] text-zinc-400 text-center'>Click button to see</p>
                                                          </div>
                                                      </div>

                                                  </div>

                                                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                      <img src="src/assets/blog-create.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                                  </div>
                                              </div>
                                            
                                              <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="9"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 11" data-carousel-slide-to="10"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 12" data-carousel-slide-to="11"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 13" data-carousel-slide-to="12"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 14" data-carousel-slide-to="13"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 15" data-carousel-slide-to="14"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 16" data-carousel-slide-to="15"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 17" data-carousel-slide-to="16"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 18" data-carousel-slide-to="17"></button>
                                                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 19" data-carousel-slide-to="18"></button>
                                              
                                              </div>
                                              
                                              <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                      <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                                      </svg>
                                                      <span class="sr-only">Previous</span>
                                                  </span>
                                              </button>
                                              <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                      <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                                      </svg>
                                                      <span class="sr-only">Next</span>
                                                  </span>
                                              </button>
                                          </div>
                                       




                                          <div id="accordion-collapse" data-accordion="collapse">
                                            <div className='border-b-[1px] border-zinc-200 pb-[10px]'>
                                            <h2 id="accordion-collapse-heading-1">
                                              <button type="button" class="flex items-center justify-between w-full px-5 pt-3 pb-2 font-medium rtl:text-right  rounded-t-xl bg-[#101010] gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span class="text-zinc-200">About TravelHub features.</span>
                                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                              </button>
                                            </h2>
                                            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                              
                                                <p className='px-5 text-zinc-300'>
                                                      TravelHub is an innovative platform designed to simplify tour planning. Our project aggregates comprehensive information about various travel destinations, allowing users to read detailed content and posts created by fellow travelers. With TravelHub, users can effortlessly plan their trips and create custom tours tailored to their preferences.
                                                
                                                </p>
                                            </div></div>
                                            <div className='border-b-[1px] border-zinc-200 pb-[10px]'>
                                            <h2 id="accordion-collapse-heading-2">
                                              <button type="button" class="flex items-center justify-between w-full px-5 pt-3 pb-2 font-medium rtl:text-right rounded-t-xl bg-[#101010]  gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                                <span class="text-zinc-200">More feature for future.</span>
                                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                              </button>
                                            </h2>
                                            <div id="accordion-collapse-body-2" class="hidden text-black" aria-labelledby="accordion-collapse-heading-2">
                                              <p className='px-5 text-zinc-300'>
                                                     While the current version features a tour booking interface, future developments will include comprehensive backend support for transactions such as booking hotels, cars, and more, enhancing the user experience and making TravelHub a one-stop solution for all travel needs.
                                              </p>
                                            </div>
                                            </div>
                                            <div className='border-b-[1px] border-zinc-200 pb-[10px]'>
                                            <h2 id="accordion-collapse-heading-3">
                                              <button type="button" class="flex items-center justify-between w-full px-5 pt-3 pb-2 font-medium rtl:text-right  rounded-t-xl bg-[#101010]  gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                                <span class="text-zinc-200">Technologies used.</span>
                                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                              </button>
                                            </h2>
                                            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                                <p className='px-5 text-zinc-300'>
                                                    
                                                    To build this robust platform, we utilized modern web development technologies including Tailwind CSS for sleek, responsive design, Laravel for a powerful and efficient backend, and XAMPP for an easy-to-setup local development environment. Whether you're looking for inspiration for your next adventure or planning a detailed itinerary, TravelHub is your go-to solution for all your travel needs.

                                                </p>
                                            </div>
                                            </div>


                                          </div>





                                      </div>
                                  </div>
                              </div>

                           
                           
                           
                           </div>
                
                          </div>
                </div>
                          
                        
                         
                     


                

                <div className='m-[20px] relative'>
                  <h1 className='text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-zinc-100 font-[500]'>Travelhub.</h1>
                  <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[400] text-zinc-300'>A platform to collect infomation for planning tours.</p>
                   <div className='mt-[20px] sm:mt-[0px] sm:absolute bottom-2 '>
                        <div>

                        
                              <h2 className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-[400] text-zinc-100 '>Technologies :</h2>
                              <div className='my-[5px] inline-flex gap-5'>
                                  <p>Laravel</p>
                                  <p>Tailwind CSS</p>
                                  <p>Xampp</p>
                              </div>
                        </div>
                        
                   </div>
                  
                 </div>
            

              




              </div>
              <div className=' border-[1px] row-span-2 border-zinc-600 rounded-[8px]'>
             </div>
              <div className='col-span-2  border-[1px] h-[300px] border-zinc-600 rounded-[8px]'></div>
          </div>
        </div>
    </div>



    <p className='text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-[400] text-zinc-300'>
                                                      TravelHub is an innovative platform designed to simplify tour planning. Our project aggregates comprehensive information about various travel destinations, allowing users to read detailed content and posts created by fellow travelers. With TravelHub, users can effortlessly plan their trips and create custom tours tailored to their preferences.
                                                
                                                </p>
                                                <p className='text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-[400] text-zinc-300'>
                                                
                                                      Currently, the tour booking feature is limited to a frontend interface, providing users with a seamless experience to explore potential bookings without actual backend support for transactions like booking hotels or cars.

                                                </p>
                                                <p className='text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-[400] text-zinc-300'>
                                                    
                                                      To build this robust platform, we utilized modern web development technologies including Tailwind CSS for sleek, responsive design, Laravel for a powerful and efficient backend, and XAMPP for an easy-to-setup local development environment. Whether you're looking for inspiration for your next adventure or planning a detailed itinerary, TravelHub is your go-to solution for all your travel needs.

                                                </p>

      

    </>
  )
}

export default App
