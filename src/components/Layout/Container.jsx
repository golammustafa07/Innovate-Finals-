import React from 'react'

const Container = ({children,classname}) => {
  return (
    <div className={`max-w-container mx-auto ${classname}`}>{children}</div>
  )
}

export default Container