import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../context/contextProvider';

interface Props {
  activeMenu: boolean;
}

function Sidebar({ activeMenu } : Props) {

  const { setActiveMenu } = useStateContext(); 

  const router = useRouter();

  // Classes for active or inactive link
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className='w-72 h-screen md:overflow-hidden overlow-auto md:hover:overflow-auto pb-10'>
      { activeMenu && (
        <>
          <div className='gap-3 ml-3 mt-4 flex justify-between'>
            <Link href="/">
              <a onClick={() => setActiveMenu(false)} className='flex gap-3 items-center text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware /> 
                <span>Shoppy</span>
              </a>
            </Link>
            <TooltipComponent content="menu" position='BottomCenter'>
              <button 
                type="button" 
                onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block relative -top-6 right-2'
              >
                <MdOutlineCancel />
              </button>
            </ TooltipComponent>
          </div>
          <div className='mt-10'>
            {
              links.map((item, index) => (
                <div key={item.title + index}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>
                    {item.title}
                  </p>
                  {item.links.map((link, index) => (
                    <Link 
                      href={`/${link.name}`}
                      key={link.name + index}
                    >
                      <a className={router.pathname == `/${link.name}` ? activeLink : normalLink } onClick={() => {}}>
                        {link.icon}
                        <span className="capitalize">
                          {link.name}
                        </span>
                      </a> 
                    </Link>
                  ))}
                </div>
              ))
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar    
