import { useState } from "react";
import Link from "next/link";
/* This example requires Tailwind CSS v2.0+ */

import React from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Products", href: "/marketplace", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Company", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const languages = [
  { name: "Shqip [ALB]", alt: "ALB", imageUrl: "/icons/flags/al.svg" },
  { name: "English [EN]", alt: "EN", imageUrl: "/icons/flags/um.svg" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [defaultLanguage, setDefaultLanguage] = useState({
    name: "English",
    alt: "EN",
    imageUrl: "/icons/flags/um.svg",
  });

  const handleLanguageChange = (selectedLanguage) => {
    setDefaultLanguage(selectedLanguage);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white border-b border-gray-200 custom-nav"
    >
      {({ open }) => (
        <>
          <div className="logo-row">
            <img
              className="hidden lg:block h-8 w-auto"
              src="/images/logo/left-leaf.png"
              alt="Left"
            />

            <Link key="1" href="/">
              <a>
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/images/logo/gentius.png"
                  alt="Workflow"
                />
              </a>
            </Link>

            <img
              className="hidden lg:block h-8 w-auto"
              src="/images/logo/right-leaf.png"
              alt="Workflow"
            />
          </div>
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 custom-menu-nav">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  // onClick={(item.current = true)}
                  className={classNames(
                    item.current
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Menu as="div" className="ml-3 relative custom-language-div">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open language menu</span>
                    <img
                      className="h-8 w-8 rounded-full custom-language-image"
                      src={defaultLanguage.imageUrl}
                      alt={defaultLanguage.alt}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none custom-language-box">
                    {languages.map((item) => (
                      <Menu.Item
                        key={item.name}
                        onClick={() => handleLanguageChange(item)}
                      >
                        {({ active }) => (
                          <span
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <img
                              className="h-6 w-6 rounded-full inline"
                              src={item.imageUrl}
                              alt={item.alt}
                            />
                            <a className="px-4">{item.name}</a>
                          </span>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={defaultLanguage.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {defaultLanguage.name}
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
              </div>
              {/* <div className="mt-3 space-y-1">
                  {languages.map((item) => (
                    <span
                      className={classNames(
                        "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      <img
                        className="h-6 w-6 rounded-full inline"
                        src={item.imageUrl}
                        alt={item.alt}
                      />
                      <a className="px-4">{item.name}</a>
                    </span>
                  ))}
                </div> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
