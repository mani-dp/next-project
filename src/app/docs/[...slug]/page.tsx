import React, { FC } from 'react'

interface Iprops {
    params: {slug: string[]}
}

const DocsPage : FC<Iprops> = ({params}) => {
  return (
    <>
    <div>DocsPage {params.slug} </div>
    <code > Docs / {params.slug.join("/")} </code>
    </>
  )
}

export default DocsPage