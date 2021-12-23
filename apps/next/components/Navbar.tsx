import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { useEffect, useRef, useState } from 'react';
import ClickOutside from './ClickOutside';

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHumbergerOpen, setIsHumbergerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                {title}
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {!isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`${
                isOpen ? 'flex' : 'hidden'
              } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
              <a className="navbar-link" href="#">
                Blog
              </a>
              <a className="navbar-link" href="#">
                Portfolio
              </a>
              <a className="navbar-link" href="#">
                About
              </a>
              <a className="navbar-link" href="#">
                Contact
              </a>
              <a className="navbar-link" href="#">
                Login
              </a>
              <ClickOutside
                onClickOutside={() => {
                  setIsHumbergerOpen(false);
                }}
              >
                <button
                  onClick={() => setIsHumbergerOpen(!isHumbergerOpen)}
                  className="navbar-link"
                >
                  <span>More</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    } inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isHumbergerOpen && (
                  <div
                    // x-transition:enter="transition ease-out duration-100"
                    // x-transition:enter-start="transform opacity-0 scale-95"
                    // x-transition:enter-end="transform opacity-100 scale-100"
                    // x-transition:leave="transition ease-in duration-75"
                    // x-transition:leave-start="transform opacity-100 scale-100"
                    // x-transition:leave-end="transform opacity-0 scale-95"
                    className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right"
                  >
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                          className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="#"
                        >
                          <div className="bg-teal-500 text-white rounded-lg p-3">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="md:h-6 md:w-6 h-4 w-4"
                            >
                              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">Appearance</p>
                            <p className="text-sm">Easy customization</p>
                          </div>
                        </a>

                        <a
                          className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="#"
                        >
                          <div className="bg-teal-500 text-white rounded-lg p-3">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="md:h-6 md:w-6 h-4 w-4"
                            >
                              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">Comments</p>
                            <p className="text-sm">
                              Check your latest comments
                            </p>
                          </div>
                        </a>

                        <a
                          className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          href="#"
                        >
                          <div className="bg-teal-500 text-white rounded-lg p-3">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="md:h-6 md:w-6 h-4 w-4"
                            >
                              <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                              <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">Analytics</p>
                            <p className="text-sm">
                              Take a look at your statistics
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </ClickOutside>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
