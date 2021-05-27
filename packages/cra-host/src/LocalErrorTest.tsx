import React from 'react'

interface LocalErrorTestProps {
  foo: string
}

export const LocalErrorTest = ({ foo }: LocalErrorTestProps) => {
  return (
    <button onClick={() => {
      throw(new Error("local error here"))
    }}>Make error in local component {foo}</button>
  )
}
