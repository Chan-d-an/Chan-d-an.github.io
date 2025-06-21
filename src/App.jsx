'use client'

import { useState } from 'react'
import { Dialog, } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const portfolioProjects = [
  {
    name: 'TravelHub Home',
    subtitle: 'A platform to collect information for planning tours.',
    desc: 'To build this robust platform, we utilized modern web development technologies including Tailwind CSS for sleek, responsive design, Laravel for a powerful and efficient backend, and XAMPP for an easy-to-setup local development environment. Whether you\'re looking for inspiration for your next adventure or planning a detailed itinerary, TravelHub is your go-to solution for all your travel needs.',
    href: '#',
    imageSrc: 'src/assets/travelhub_home.png',
    imageAlt: 'TravelHub Home Image',
  },
  {
    name: 'Face Recognition Attendance System',
    subtitle: 'A system to automate attendance using face recognition.',
    desc: 'This project leverages advanced facial recognition technology to automate attendance tracking. It is built with Python and OpenCV for face detection and recognition, and integrates with a database to store attendance records. The system is designed to be highly accurate and efficient, reducing manual attendance tasks and ensuring reliable records.',
    href: 'https://github.com/Chan-d-an/Face-attendance-system',
    imageSrc: 'src/assets/face.jpg',
    imageAlt: 'Face Image',
  },
];


function App() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(portfolioProjects[0])

  const openDialog = (project) => {
    setSelectedProject(project)
    setOpen(true)
  }
  return (
    <>

      <div className="flex items-center justify-center my-auto min-h-screen bg-[#101010]">
        <div className="">
          <div className="flex items-center justify-center my-[20px]  ">
            <div className=" relative">
              <div>
                <img
                  src="src/assets/avatar1.png"
                  className="h-[65px] w-[65px] rounded-full border-[5px] border-zinc-300"
                  alt=""
                />
              </div>
              <div className="absolute -top-6 -right-6">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 512.00 512.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f91f1f"
                  stroke="#f91f1f"
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(270)"
                  strokeWidth="0.00512"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#dedede"
                      d="M255.4 31.96a224 224 0 0 0-62.1 8.96A224 224 0 0 0 40.97 318.7 224 224 0 0 0 318.7 471 224 224 0 0 0 471 193.2 224 224 0 0 0 256 31.96a224 224 0 0 0-.6 0zm-.6 38.97c80.5-.56 155.1 52.07 178.8 133.27 28.6 98-27.8 200.8-125.8 229.4-98 28.5-200.8-27.8-229.39-125.8C49.82 209.7 106.2 106.9 204.2 78.36c16.8-4.91 33.8-7.32 50.6-7.43zm.1 17.98c-15.1.11-30.5 2.29-45.7 6.73C120.6 121.5 69.84 214.1 95.69 302.7 121.5 391.3 214.1 442.1 302.8 416.3c88.6-25.9 139.4-118.5 113.5-207.1-21.4-73.4-88.5-120.83-161.4-120.29zm45 62.69c10.7.2 20.5 7.3 23.6 18 3.9 13.1-3.8 27.2-17 31-13.1 3.8-27.1-3.9-31-17-3.8-13.2 3.9-27.2 17-31 2.5-.7 5-1 7.4-1zm-.2 18c-.7 0-1.4.1-2.1.3-3.9 1.1-5.9 4.8-4.8 8.7 1.1 3.8 4.8 5.8 8.7 4.7 3.8-1.1 5.9-4.8 4.7-8.7-.9-3.1-3.5-5-6.5-5zm-124.5 17.9h1.9c10.6.2 20.4 7.3 23.5 17.9 3.9 13.2-3.8 27.2-17 31-13.1 3.9-27.1-3.8-31-17-3.8-13.1 3.9-27.1 17-31 1.9-.5 3.7-.8 5.6-.9zm1.6 17.9c-.7 0-1.4.1-2.1.3-3.9 1.1-5.9 4.9-4.8 8.7 1.1 3.8 4.9 5.9 8.7 4.8 3.8-1.2 5.9-4.9 4.8-8.7-.9-3.1-3.6-5.1-6.6-5.1zm159 69.1c10.6.2 20.5 7.3 23.6 18 3.8 13.1-3.9 27.1-17 31-13.2 3.8-27.2-3.9-31-17-3.9-13.2 3.8-27.2 17-31 2.4-.7 4.9-1.1 7.4-1zm-.8 18c-.6 0-1.1.1-1.6.3-3.8 1.1-5.9 4.8-4.8 8.6 1.2 3.9 4.9 5.9 8.7 4.8 3.9-1.1 5.9-4.8 4.8-8.7-.9-3.1-3.6-5-6.6-5h-.5zm-122.1 17.8c10.6.3 20.5 7.3 23.6 18 3.8 13.2-3.9 27.2-17 31-13.2 3.9-27.2-3.8-31-17-3.8-13.1 3.8-27.1 17-31 2.5-.7 4.9-1 7.4-1zm-.2 18c-.7 0-1.5.1-2.2.3-3.8 1.1-5.9 4.8-4.7 8.7 1.1 3.8 4.8 5.9 8.6 4.7 3.9-1.1 5.9-4.8 4.8-8.6-.9-3.2-3.5-5.1-6.5-5.1z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="my-[5px] md:my-[10px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[500] text-zinc-100 text-center">
            So. Welcome.
          </h1>
          <p className=" my-[5px] md:my-[15px] text-[18px]  md:text-[22px] lg:text-[24px] xl:text-[26px] text-zinc-400 text-center">
            Chandan Sharma&apos;s portfolio
          </p>
          <a href="/public/Chandan_Resume.pdf" className="my-[5px] md:my-[10px] flex items-center justify-center py-[5px] px-[10px] md:py-[8px] md:px-[15px] text-[12px] md:text-[18px] border-[2px] border-blue-500 text-blue-700  text-center mx-auto bg-blue-200  rounded-[10px]">
            Download CV
          </a>
        </div>
      </div>
      <div className="bg-[#101010]">
        <div className="bg-[#101010] mx-[4px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px] min-h-screen brder-[#212121] rounded-[15px] sm:rounded-[22px] md:rounded-[30px] ">
          <h1 className="p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300">
            About
          </h1>

          <div className="p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] border-zinc-600 border-[1px] rounded-[5px] sm:rounded-[10px] md:rounded-[15px] lg:rounded-[20px]">
            <div className="w-full  p-[16px] rounded-[10px] shadow-lg">
              <div className="my-[10px] w-full flex justify-end">
                <div className="flex items-end">
                  <p className="leading-[20px] ml-[10px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]">
                    Hello! Thank you for this opportunity.
                  </p>
                  <img
                    src="src/assets/avatar1.png"
                    className="ml-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                </div>
              </div>

              <div className="my-[10px] w-full flex">
                <div className="flex items-end">
                  <img
                    src="src/assets/avatar1.png"
                    className="mr-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                  <p className="leading-[20px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]">
                    Hi there! Can you start by telling me a bit about yourself?
                  </p>
                </div>
              </div>

              <div className="my-[10px] w-full flex justify-end">
                <div className="flex items-end">
                  <p className="leading-[20px] ml-[10px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]">
                    Sure! I’m a recent graduate with a diploma in Information Technology. I’ve worked on several projects during my studies and I’m excited to start my career in development.
                  </p>
                  <img
                    src="src/assets/avatar1.png"
                    className="ml-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                </div>
              </div>

              <div className="my-[10px] w-full flex">
                <div className="flex items-end">
                  <img
                    src="src/assets/avatar1.png"
                    className="mr-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                  <p className="leading-[20px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]">
                    That’s great to hear. What technologies are you most familiar with?
                  </p>
                </div>
              </div>

              <div className="my-[10px] w-full flex justify-end">
                <div className="flex items-end">
                  <p className="leading-[20px] ml-[10px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]">
                    I’m comfortable with HTML, CSS, JavaScript, and have experience with React and Node.js.Php Laravel
                  </p>
                  <img
                    src="src/assets/avatar1.png"
                    className="ml-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                </div>
              </div>

              <div className="my-[10px] w-full flex">
                <div className="flex items-end">
                  <img
                    src="src/assets/avatar1.png"
                    className="mr-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                  <p className="leading-[20px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]">
                    That’s a solid foundation. Can you tell me about a challenging project you’ve worked on?
                  </p>
                </div>
              </div>

              <div className="my-[10px] w-full flex justify-end">
                <div className="flex items-end">
                  <p className="leading-[20px] ml-[10px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]">
                    One challenging project was building a full-stack application with a tight deadline. I had to quickly learn new technologies and manage time effectively, but it was a great learning experience.
                  </p>
                  <img
                    src="src/assets/avatar1.png"
                    className="ml-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                </div>
              </div>

              <div className="my-[10px] w-full flex">
                <div className="flex items-end">
                  <img
                    src="src/assets/avatar1.png"
                    className="mr-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                  <p className="leading-[20px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-800 bg-[#ecebeb] font-[400] border-zinc-500 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-br-[10px] rounded-t-[10px]">
                    Impressive! What are you looking for in your first job?
                  </p>
                </div>
              </div>

              <div className="my-[10px] w-full flex justify-end">
                <div className="flex items-end">
                  <p className="leading-[20px] ml-[10px] text-[14px] md:text-[16px] py-[5px] px-[10px] sm:px-[12px] sm:py-[7px] text-zinc-100 bg-blue-600 font-[400] border-zinc-700 border-[2px] max-w-[300px] w-auto min-w-[50px] rounded-bl-[10px] rounded-t-[10px]">
                    I’m looking for opportunities to grow as a developer and work on interesting projects. I’m excited to contribute to a team and learn from experienced professionals.
                  </p>
                  <img
                    src="src/assets/avatar1.png"
                    className="ml-[10px] h-[40px] w-[40px] rounded-full border-[5px] border-zinc-700"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section
        id="education"
        className="md:min-h-screen md:pt-[150px] bg-[#101010]"
      >
        <div className="ml-[20px] mr-[5px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px]">
          <h1 className="p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300">
            Education.
          </h1>

          <div className="flex flex-col md:grid grid-cols-9 m-auto p-2 text-blue-50 ">
            <div className="flex fleow-reverse md:contents">
              <div className="col-start-1 col-end-3  mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-blue-500 shadow">
                  2019-20
                </div>
              </div>
              <div
                className="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="font-semibold text-blue-500 text-md sm:text-lg mb-1">
                  10th,H.P. Board
                </h3>
                <p className="leading-tight text-sm sm:text-md text-justify">
                  Complete 10th, from Govt. Sr. Sec. school Dandroo, Hamirpur
                  (H.P.) with 77%.
                </p>
              </div>
            </div>

            <div className="flex fleow-reverse md:contents">
              <div className="col-start-1 col-end-3 mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-blue-500 shadow">
                  202-22
                </div>
              </div>
              <div
                className="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="font-semibold text-blue-500 text-md sm:text-lg mb-1">
                  12th,H.P. Board
                </h3>
                <p className="leading-tight text-sm sm:text-md text-justify">
                  Complete 12th, from Govt. Sr. Sec. school Jaure Amb, Hamirpur
                  (H.P.) with 75%.
                </p>
              </div>
            </div>

            <div className="flex fleow-reverse md:contents">
              <div className="col-start-1 col-end-3 mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-50 pointer-events-none"></div>
                </div>
                <div className="min-w-[80px] text-center p-[5px] absolute top-1/2 -mt-2 -ml-6 rounded-xl bg-gray-50 text-blue-500 border-[3px] border-zinc-500 shadow">
                  2022-24
                </div>
              </div>
              <div
                className="bg-[#101010] border-[1px] border-zinc-700 col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="font-semibold text-blue-500 text-md sm:text-lg mb-1">
                  Diploma in Information Technology
                </h3>
                <p className="leading-tight text-sm sm:text-md text-justify">
                  Pursuing diploma from Govt. Polytechnic Hamirpur (H.P.)
                  (Result Pending).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" pt-[70px] min-h-screen bg-[#101010] text-zinc-200">
        <div className="mx-[4px] sm:mx-[26px] md:mx-[50px] lg:mx-[80px] p-[8px] sm:p-[16px] md:p-[32px] lg:p-[40px]">
          <h1 className="mb-[30px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-300">
            Projects
          </h1>
       
          <div className="flex flex-col sm:flex-row space-x-10 mx-auto justify-between items-center">
        {portfolioProjects.map((project, index) => (
          <button
            key={index}
            className="w-full h-80 mt-4 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg xl:text-xl bg-zinc-800 text-zinc-100 rounded-md"
            onClick={() => openDialog(project)}
          >
            <img
              src={project.imageSrc}
              className="sm:rounded-l-[8px] sm:rounded-tr-[0px] rounded-t-[10px] h-full w-full"
              alt={project.imageAlt}
            />
          </button>
        ))}
      </div>

          <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Dialog.Panel
              className="flex w-full transform text-left text-base transition-all sm:my-8 sm:max-w-2xl sm:px-4 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img alt={selectedProject.imageAlt} src={selectedProject.imageSrc} className="object-cover object-center" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{selectedProject.name}</h2>
                    <h3 className="text-lg font-medium text-gray-600">{selectedProject.subtitle}</h3>
                    <p className="mt-4 text-gray-700">{selectedProject.desc}</p>

                    <a href={selectedProject.href} className="mt-6 inline-block text-indigo-600 hover:text-indigo-500">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
        </div>
      </div>
    </>
  );
}

export default App;
