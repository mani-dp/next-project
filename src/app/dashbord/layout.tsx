'use client'

import Link from "next/link";
import { FC, ReactNode } from "react"

interface Ichildren {
    children: ReactNode,
    news: ReactNode,
    analytics: ReactNode,
}

const DashbordLayout: FC<Ichildren> = ({ children, news, analytics}) => {

    return (

        <>

        <div className="grow flex flex-wrap gap-1.5"> 
            <div className="text-xl w-full "> dashbord</div>
            <div className=" w-[40%]  border " > new :  {news} </div>
            <div className=" w-[40%] border"> analytics : {analytics}</div>
        </div>
        <div className="flex ">
            <aside className="w-52 p-5 bg-blue-950">
                <h3 className="text- xl ">- Dashbord Menu -</h3>
                <ul className=" underline ">
                    <li className="hover:text-amber-100 ">

                        <Link href={`/dashbord/products`}>products</Link>

                    </li>
                    <li className="hover:text-amber-100 ">
                        <Link href={'/dashbord/profile'}>profile</Link>

                    </li>
                    <li className="hover:text-amber-100 ">
                        <Link href={'/dashbord/setting'}>setting</Link>

                    </li>

                    <li className="hover:text-amber-100 ">
                        <Link href={'/'}>home page</Link>

                    </li>
                </ul>
            </aside>
            <main
                className="text-blue-300 bg-blue-900 rounded-[20px] items-center flex justify-center "
            >
                {children}
            </main>
        </div>
        </>
    )
}

export default DashbordLayout