import React, { SVGProps } from 'react'

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  content?: any
  onClick?: () => {}
}

const SidebarRow = ({ Icon, title, onClick, content }: Props) => {
  return (
    <div
      onClick={() => onClick?.()}
      className="group:hover:font-bold group mx-auto flex w-[400px] items-center justify-between rounded-full px-6 py-[2px] transition-all duration-200"
    >
      <div className="flex">
        <Icon className="h-6 w-6 " />
        <p className="ml-2 text-base font-light text-gray-400 md:inline-flex lg:text-xl">
          {title}:
        </p>
      </div>
      <div className="ml-2 mt-[2px] font-light text-gray-400 group-hover:font-bold">
        {content}
      </div>
    </div>
  )
}

export default SidebarRow
