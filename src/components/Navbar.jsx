import React, { useState } from 'react'

const Navbar = () => {

  const [isShowAside, setIsShowAside] = useState(false)
  const [isShowFeatures, setIsShowFeatures] = useState(false)
  const [isShowCompany, setIsShowCompany] = useState(false)

  const handleChangeAside = () => {
    setIsShowAside(!isShowAside)
  }

  const handleChangeFeatures = () => {
    setIsShowFeatures(!isShowFeatures)
  }

  const handleChangeShowCompany = () => {
    setIsShowCompany(!isShowCompany)
  }

  return (
    <nav className='flex justify-between items-center px-4 py-4'>
      <h1 className='text-4xl font-bold'>snap</h1>
      <img onClick={handleChangeAside} className='h-5 cursor-pointer' src="/images/icon-menu.svg" alt="" />
      <section className={`bg-transparent-black ${isShowAside ? "animate-fadeInBg" : "animate-fadeOutBg"} text-medium-gray fixed top-0 min-h-screen left-0 right-0`}>
        <aside className={`bg-almost-white ${isShowAside ? "animate-fadInAside" : "animate-fadOutAside"} absolute right-0 w-[260px] pt-20 px-8 h-screen overflow-y-auto`}>

          <img onClick={handleChangeAside} className='absolute top-4 right-4 cursor-pointer' src="/images/icon-close-menu.svg" alt="" />

          <section className={`${isShowFeatures ? "h-auto" : "h-8"} transition-height duration-200 overflow-hidden`}>
            <div className='flex gap-4 items-center'>
              <h3>Features</h3>
              <div>
                <img className='cursor-pointer' onClick={handleChangeFeatures} src="/images/icon-arrow-up.svg" alt="" />
              </div>
            </div>
            <ul className='pl-6 my-6 flex flex-col gap-4'>
              <li className='flex items-center gap-4'>
                <div>
                  <img className='h-5' src="/images/icon-todo.svg" alt="" />
                </div>
                <h4>Todo List</h4>
              </li>
              <li className='flex items-center gap-4'>
                <div>
                  <img className='h-5' src="/images/icon-calendar.svg" alt="" />
                </div>
                <h4>Calendar</h4>
              </li>
              <li className='flex items-center gap-4'>
                <div>
                  <img className='h-5' src="/images/icon-reminders.svg" alt="" />
                </div>
                <h4>Reminders</h4>
              </li>
              <li className='flex items-center gap-4'>
                <div>
                  <img className='h-5' src="/images/icon-planning.svg" alt="" />
                </div>
                <h4>Planning</h4>
              </li>
            </ul>
          </section>

          <section className={`${isShowCompany ? "h-auto" : "h-8"} overflow-hidden`}>
            <div className='flex gap-4 items-center'>
              <h3>Company</h3>
              <img onClick={handleChangeShowCompany} className="cursor-pointer" src="/images/icon-arrow-up.svg" alt="" />
            </div>
            <ul className='pl-6 my-6 flex flex-col gap-4'>
              <li>
                <h4>History</h4>
              </li>
              <li>
                <h4>Our Team</h4>
              </li>
              <li>
                <h4>Blog</h4>
              </li>
            </ul>
          </section>

          <h3 className='my-4'>Careers</h3>

          <h3 className='my-4'>About</h3>

          <div className='flex flex-col items-center gap-4'>
            <button>Login</button>
            <button className='w-full border-2 border-medium-gray py-2 rounded-2xl hover:bg-almost-black hover:text-almost-white transition duration-200 hover:border-almost-white'>Register</button>
          </div>

        </aside>
      </section>
    </nav>
  )
}

export default Navbar