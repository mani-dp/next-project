import React from 'react'

interface Iprops { 
    params: {id: string}
}

const productId =  async({params} : Iprops) => {
    const { id } = await params;
    return (
    <div> id  prducts ID  = {id} </div>
  )
}

export default productId