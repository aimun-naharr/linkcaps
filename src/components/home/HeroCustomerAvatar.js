import React from 'react'

export default function HeroCustomerAvatar() {
  return (
    <div className="flex gap-2 items-center">
      {/* avatars */}
      <div className="flex w-[90px] h-[40px] relative ">
        <div className="size-10 absolute rounded-full bg-gray-400"></div>
        <div className="size-10 left-6 absolute rounded-full bg-gray-400"></div>
        <div className="size-10 left-12 absolute rounded-full bg-gray-400"></div>
      </div>
      <span>50k+ satisfied customer</span>
    </div>
  )
}
