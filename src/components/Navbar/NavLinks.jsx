import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = ({ handleClick }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const timeoutIdRef = useRef(null);

  const handleMouseOver = () => {
    clearTimeout(timeoutIdRef.current);
    setDropdownVisible(true);
  };

  const handleMouseOut = () => {
    timeoutIdRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {links.map((link,i) => (
        <div key={i}>
          <div
            className="px-3 text-left md:cursor-pointer group"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Link
            to={link.links}
              className="py-5 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </Link>
            {link.submenu && (
              <div
                ref={dropdownRef}
                className={`absolute top-20 z-50 hover-dropdown-item ${dropdownVisible ? "block" : "hidden"
                  }`}
              >
                <div className="py-1">
                  <div
                    className="w-4 h-4 after-dropdown absolute 
                    mt-0 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-5  capitalize grid grid-cols-5 gap-4">
                  {link.sublinks.map((mysublinks, i) => (
                    <div>
                      <Link to={mysublinks.linkH} className="text-sm capitalize font-semibold">
                        {mysublinks.Head}
                      </Link>
                      {mysublinks.sublink.map((slink) => (
                        <li
                          className={`${i >= 7
                            ? "text-sm capitalize font-semibold"
                            : "text-xs text-gray-600 my-2.5"
                            }`}
                        >
                          <Link
                            to={`/products?headslug=${slink.link}`}
                            className={`${i >= 10 ? "" : "hover:text-orange-500"}`}
                            onClick={() => {
                              handleClick();
                              setDropdownVisible(false);
                            }}
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <span
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                          ? "chevron-up"
                          : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </span>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link
                          to={`/products?headslug=${slink.link}`}
                          onClick={() => {
                            handleClick();
                            setDropdownVisible(false);
                          }}
                        >{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks