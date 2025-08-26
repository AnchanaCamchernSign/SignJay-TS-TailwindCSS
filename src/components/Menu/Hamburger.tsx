import { useState } from "react";

export interface HamburgerProps {
  onClick: () => void;
  isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
  const { onClick, isInitiallyOpen } = props;
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onClick();
  };

  return (
    <div className="ml-0">
      <button
        onClick={handleClick}
        type="button"
        className="w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer"
      >
        <div
          className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "translate-x-full bg-transparent" : "translate-x-0"
          }`}
        />
        <div
          className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "rotate-[-45deg]" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Blur + dark overlay */}
          <div
            className="blurred"
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute left-8 mt-2 mb-120 bg-white shadow-lg rounded p-4 w-lg min-h-full z-50">
            <ul className="flex flex-col gap-2">
              <li className="menu-item pt-12">
                <a href="/" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="/about" className="menu-link">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="/contact" className="menu-link">
                  Contact
                </a>
              </li>
              <li className="menu-item">
                <a href="/contact" className="menu-link">
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
