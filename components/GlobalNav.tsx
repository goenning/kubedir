'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import {AllTopics, Topic } from '../data';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center space-x-2.5"
          onClick={close}
        >
          <h2 className="font-medium tracking-wide text-gray-300 group-hover:text-gray-50">
            Kubedir
          </h2>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-300" />
        ) : (
          <Bars3BottomRightIcon className="block w-6 text-gray-300" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="px-1 py-1">
          {AllTopics.map((topic) => {
            return (
              <div key={topic.id} className="space-y-1">
                <GlobalNavItem topic={topic} close={close} />
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  topic,
  close,
}: {
  topic: Topic
  close: () => false | void;
}) {
  const pathName = usePathname();
  const href = `/topics/${topic.id}`
  const isActive = href === pathName;

  return (
    <Link
      onClick={close}
      href={href}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium  hover:text-gray-300',
        {
          'text-gray-500 hover:bg-gray-800': !isActive,
          'text-gray-200': isActive,
        },
      )}
    >
      {topic.title}
    </Link>
  );
}