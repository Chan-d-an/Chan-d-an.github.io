import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <div className='bg-[#1a1919] x-[8px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px] min-h-screen border-[#3c3c3c] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border-[3px]'>
        <div className='  p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px]  rounded-[5px] sm:rounded-[10px] md:rounded-[15px] lg:rounded-[20px]'>
            <div className=''>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300'>About</h1>
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




      
    </>
  )
}

export default App
