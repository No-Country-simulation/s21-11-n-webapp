import { useState } from 'react';

const sandwichLineClasses = 'h-0.5 w-5 mt-1 bg-slate-300';

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const clickToogleMenu = () => {
    setIsOpened(prevState => !prevState);
  }

  return (
    <>
      <nav className='bg-gray-800 text-slate-300'>

        {/* MOBILE */}
        <div className='p-2 flex justify-between items-center
        sm:hidden'>
          <div>
            Logo
          </div>
          <div onClick={clickToogleMenu}>
            <div className={sandwichLineClasses}></div>
            <div className={sandwichLineClasses}></div>
            <div className={sandwichLineClasses}></div>
          </div>
        </div>
        {
          isOpened ? <div>
            <ul className='bg-gray-600'>
              <li className='p-2'>Route 1</li>
              <li className='p-2'>Route 2</li>
              <li className='p-2'>Route 3</li>
              <li className='p-2'>Route 4</li>
            </ul>
          </div> : ''
        }


        {/* PC */}
        <div className='hidden
          sm:block sm:p-2'
        >
          <ul className='flex justify-between'>
            <li>Route 1</li>
            <li>Route 2</li>
            <li>Logo</li>
            <li>Route 3</li>
            <li>Route 4</li>
          </ul>
        </div>



      </nav>


    </>
  )
}
