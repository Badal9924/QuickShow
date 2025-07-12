import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="sticky bg-[#09090B] top-0 left-0 right-0 flex justify-between items-center px-5 py-3 max-w-screen-2xl mx-auto">
      <div>
        <img src={assets.logo} alt="" />
      </div>
      <ul
        className={`w-[0px] min-h-[100vh] overflow-hidden list-none absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center text-2xl backdrop-blur bg-black/70 transition-all duration-300 ${
          open ? "w-[100%]" : ""
        } md:static md:min-h-auto md:w-auto md:bg-[#3C3C3C] md:px-[18px] md:py-[3px] md:rounded-2xl md:text-xl`}
      >
        <XIcon
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute top-3 right-4 ${open ? "block" : "hidden"}`}
          size={35}
        />
        <div className="md:flex md:gap-[16px]">
          <li className="mb-[6px]">
            <Link to="#">Home</Link>
          </li>

          <li className="mb-[6px]">
            <Link to="#">Movies</Link>
          </li>

          <li className="mb-[6px]">
            <Link to="#">Theaters</Link>
          </li>

          <li className="mb-[6px]">
            <Link to="#">Releases</Link>
          </li>

          <li className="mb-[6px]">
            <Link to="#">Favorites</Link>
          </li>
        </div>
      </ul>

      <div className="flex gap-5">
        {!user ? (
          <button
            onClick={openSignIn}
            className="bg-primary hover:bg-primary-dull transition rounded-full px-4 py-1 cursor-pointer text-[18px]"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15}/>}
                onClick={()=>navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        <MenuIcon
          onClick={() => {
            setOpen(!open);
          }}
          size={35}
          className={`${open ? "hidden" : "block"} md:hidden`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
