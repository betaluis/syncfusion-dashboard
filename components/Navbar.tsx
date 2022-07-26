
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/contextProvider';

interface Props {
  isMenuActive: Boolean;
}

const Navbar = ({ isMenuActive }: Props) => {

  const { setActiveMenu } = useStateContext();

  return (
    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${isMenuActive ? "md:ml-72" : "flex-2"}`}> 
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">

      </div>             
    </div>
  );
}

export default Navbar;
