'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { AllTopics, Topic } from '@data'

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-200 lg:bottom-0 lg:z-auto lg:w-52 lg:border-r">
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
        <div>
          <span className="mt-4 px-4 text-xs font-medium uppercase text-gray-600">
            Topics
          </span>
          <nav className="space-y-1 px-1 py-1">
            {AllTopics.map((topic) => {
              return (
                <GlobalNavItem key={topic.id} topic={topic} close={close} />
              )
            })}
          </nav>
        </div>
        <div className="relative bottom-0 lg:absolute lg:bottom-4">
          <a
            href="https://github.com/goenning/kubedir"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 inline-flex items-center space-x-2 rounded bg-zinc-700 py-2 px-2 text-xs text-white shadow hover:bg-zinc-800"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Contribute on GitHub</span>
          </a>
        </div>
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
