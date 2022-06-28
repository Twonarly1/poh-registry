import React from 'react'
import useCopyClipboard from '../lib/hooks/useCopyClipboard'
import { CheckCircleIcon, DuplicateIcon } from '@heroicons/react/outline'

interface CopyProps {
  toCopy: string
}

export default function CopyHelper({ toCopy }: CopyProps) {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <button className="inline-flex" onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <CheckCircleIcon className="h-6 w-6 text-gray-300" />
      ) : (
        <DuplicateIcon className=" h-6 w-6 items-center text-gray-300 hover:scale-110" />
      )}
    </button>
  )
}
