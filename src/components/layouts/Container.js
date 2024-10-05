import React from 'react'

export default function Container({ children }) {
  return (
    <div className='max-w-[80rem] mx-auto px-4'>{children}</div>
  )
}
