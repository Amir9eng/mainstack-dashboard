import { NavLink } from 'react-router-dom';

const NavItem = ({
  to,
  icon,
  children,
}: {
  to: string;
  icon: string;
  children: string;
}) => {
  return (
    <NavLink
      end
      to={to}
      className="flex items-center space-x-3 lg:pl-16 py-1 my-1 w-full border-none lg:border-l-[3px] border-transparent rounded-sm text-[#56616B]"
    >
      <img src={icon} alt="" width={15} />
      <span>{children}</span>
    </NavLink>
  );
};

export default NavItem;
