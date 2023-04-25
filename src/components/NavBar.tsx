import { useState } from 'react';
import logo from '../assets/mainstack-logo.svg';
import dashboard from '../assets/dashboard.svg';
import item1 from '../assets/edit.svg';
import item2 from '../assets/group.svg';
import item3 from '../assets/hourglass_empty.svg';
import item4 from '../assets/add_a_photo.svg';
import item5 from '../assets/delete.svg';
import item6 from '../assets/subscriptions.svg';
import item7 from '../assets/file_present.svg';
import item8 from '../assets/alarm.svg';
import dots from '../assets/more_horiz.svg';
import menu from '../assets/menu-icon.svg';
import close from '../assets/close-md-svgrepo-com(1).svg';
import avatar from '../assets/unsplash_F16KPYxfm6s.png';
import NavItem from './NavItem';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <nav className="text-[#56616B] bg-white py-4 lg:flex justify-around items-center flex-row  lg:flex-col lg:top-0 lg:bottom-auto lg:w-80 lg:h-screen lg:py-0 lg:justify-between shadow-md">
      <div className="w-full flex flex-col lg:space-y-10 items-center lg:items-start">
        <div className="w-full flex justify-around space-x-5 items-center lg:justify-start lg:space-x-0">
          <div className="hambuger lg:hidden">
            <img
              src={menu}
              onClick={handleNav}
              className={`${isOpen ? 'hidden' : ''} open`}
              width={30}
            ></img>
            <img
              src={close}
              onClick={handleNav}
              className={`${!isOpen ? 'hidden' : ''} close`}
              width={30}
            ></img>
          </div>
          <div className="lg:mt-10 pl-16 lg:block ">
            <img src={logo} alt="" />
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col h-screen lg:h-auto`}
        >
          <NavItem to="/" icon={dashboard}>
            Dashboard
          </NavItem>
          <NavItem to="/item1" icon={item1}>
            Item1
          </NavItem>
          <NavItem to="/item2" icon={item2}>
            Item2
          </NavItem>
          <NavItem to="/item3" icon={item3}>
            Item3
          </NavItem>
          <span className="lg:pl-16 mt-6 text-sm">OTHER 1</span>
          <NavItem to="/item4" icon={item4}>
            Item4
          </NavItem>
          <NavItem to="/item5" icon={item5}>
            Item5
          </NavItem>
          <span className="lg:pl-16 mt-6 text-sm">OTHER 2</span>
          <NavItem to="/item6" icon={item6}>
            Item6
          </NavItem>
          <NavItem to="/item7" icon={item7}>
            Item7
          </NavItem>
          <NavItem to="/item8" icon={item8}>
            Item8
          </NavItem>
        </div>
        <div className="hidden w-full lg:flex items-center pl-16 pr-5 justify-between">
          <div className=" flex items-center space-x-3">
            <div className="avatar w-8 h-8 rounded-full overflow-hidden">
              <img src={avatar} alt="" />
            </div>
            <span>Blessing Daniels</span>
          </div>
          <img className="h-1" src={dots} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
