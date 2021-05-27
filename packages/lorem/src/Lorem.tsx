import React from 'react'

interface LoremProps {
  foo: string
}

export const Lorem = ({ foo }: LoremProps) => {
  return (
    <div>
      <h1>Lorem: {foo}</h1>
      <button onClick={() => {
        throw("error here")
      }}>Make error</button>
    </div>

  )
}
