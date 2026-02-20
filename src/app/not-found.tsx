import Link from "next/link"


const notfound = () => {
  return (
    <div className="w-full h-125 flex justify-center items-center border-2 flex-col gap-3.5 ">
        <h3 className="border rounded-[10px] text-3xl "> page is notfound</h3>
        <Link className="border rounded-[10px]"  href={'/'}>go to the home page </Link>
    </div>
  )
}

export default notfound