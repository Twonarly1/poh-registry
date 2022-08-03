import { ChevronUpIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="relative flex items-center py-4 pb-20 text-center">
      <div className="flex-grow border-t border-gray-600 border-opacity-50"></div>

      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-100',
          'hover:shadow-primary-pink hover:text-primary-pink relative items-center rounded-full bg-white p-3 px-3 text-center font-mono font-bold shadow-md outline-none transition duration-500 ease-in-out hover:text-opacity-50 hover:shadow-md focus:outline-none focus:ring-offset-2 '
        )}
      >
        <ChevronUpIcon
          className="hover:text-primary-pink h-6 w-6 text-gray-600 text-opacity-50 transition duration-200 ease-in-out hover:text-opacity-50"
          aria-hidden="true"
        />
      </button>
      <div className="flex-grow border-t border-gray-600 border-opacity-50"></div>
    </div>
  )
}

export default ScrollToTop
