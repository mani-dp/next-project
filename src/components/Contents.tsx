import React, { ReactNode } from "react"

interface Ichildren {

  children: ReactNode,
}

const Contents = ({children} :Ichildren )  => {
  return (
    <div className="flex justify-center items-center w-7xl max-h-screen mx-auto">
      {children}
    </div>
  )
}

export default Contents