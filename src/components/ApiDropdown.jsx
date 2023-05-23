import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ApiDropdown() {
    return (
        <Menu as="li" className="relative inline-block text-left">

            <Menu.Button className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white cursor-pointer">
                API

            </Menu.Button>


            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-600 divide-y divide-gray-100 bg-white  dark:bg-zinc-800">
                    <div className="py-1">
                        <Menu.Item>
                            <p className="block px-4 py-2 text-sm text-gray-700 font-semibold dark:text-white">
                                Version 0.0.1
                            </p>
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 dark:bg-zinc-600' : 'text-gray-700 dark:text-white',
                                        'block px-4 py-2 text-sm dark:text-zinc-400 dark:hover:text-white'
                                    )}
                                >
                                    Changelog
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
