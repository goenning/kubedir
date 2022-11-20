'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { AllTopics, Topic } from '../data'

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-200 bg-white lg:bottom-0 lg:z-auto lg:w-72 lg:border-r">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center space-x-2.5"
          onClick={close}
        >
          <Image
            width={70}
            height={80}
            className="w-8 object-contain"
            src="/logo.png"
            alt="Kubedir Logo"
          />
          <h2 className="font-medium tracking-wide">Kubedir</h2>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="block w-6" />
        ) : (
          <Bars3BottomRightIcon className="block w-6" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white': isOpen,
          hidden: !isOpen,
        })}
      >
        <span className="mt-4 px-4 text-xs font-medium uppercase text-gray-600">
          Topics
        </span>
        <nav className="space-y-1 px-1 py-1">
          {AllTopics.map((topic) => {
            return <GlobalNavItem key={topic.id} topic={topic} close={close} />
          })}
        </nav>
      </div>
    </div>
  )
}

function GlobalNavItem({
  topic,
  close,
}: {
  topic: Topic
  close: () => false | void
}) {
  const pathName = usePathname()
  const href = `/topics/${topic.id}`
  const isActive = href === pathName

  return (
    <Link
      onClick={close}
      href={href}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium text-black',
        {
          'bg-gray-200': isActive,
          'hover:bg-gray-200': !isActive,
        }
      )}
    >
      {topic.title}
    </Link>
  )
}
