import React from 'react'

interface LoremProps {
  foo: string
}

export const Lorem = ({ foo }: LoremProps) => {
  return (
    <h1>Lorem: {foo}</h1>
  )
}
