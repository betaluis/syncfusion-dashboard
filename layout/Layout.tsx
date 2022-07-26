import { useEffect } from "react";
import { Navbar, SettingsToolTip, Sidebar } from "../components";
import { useStateContext } from '../context/contextProvider'

interface Props {
  pageName: string;
}

const Layout: React.FC<Props> = ({ pageName = null }) => {

  const { activeMenu } = useStateContext();
  console.log(activeMenu)

  if (pageName) {
    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  }

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <SettingsToolTip /> 
        {
          activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar activeMenu={activeMenu} />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar activeMenu={activeMenu} />
            </div>
          )
        }

        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}> 
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar isMenuActive={activeMenu} />
          </div>             
        </div>

        <div>
          <span>{pageName && pageName}</span>
        </div>
      </div>
    </div>
  )

}

export default Layout;
