import React from 'react'
import useCopyClipboard from '../lib/hooks/useCopyClipboard'
import {
  CheckCircleIcon,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  DuplicateIcon,
} from '@heroicons/react/outline'

interface CopyProps {
  toCopy: string
}

export default function CopyHelper({ toCopy }: CopyProps) {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <button className="flex-start" onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <ClipboardCheckIcon className="h-4 w-4  text-gray-300 md:h-6 md:w-6" />
      ) : (
        <ClipboardIcon className="inline-flex h-4 w-4   text-gray-300 md:h-6 md:w-6" />
      )}
    </button>
  )
}
