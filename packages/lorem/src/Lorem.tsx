import React from 'react'

interface LoremProps {
  foo: string
}

export const Lorem = ({ foo }: LoremProps) => {
  return (
    <button onClick={() => {
      throw(new Error("imported package error here"))
    }}>Make error in imported package component {foo}</button>
  )
}
