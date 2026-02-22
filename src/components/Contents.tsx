import React, { Children, ReactNode } from "react"

 
interface Ibibb { 
  children: ReactNode
}

const Contents: React.FC<Ibibb> = ()  => {
  return (
    <div className="flex justify-center items-center w-7xl max-h-screen mx-auto"></div>
  )
}

export default Contents