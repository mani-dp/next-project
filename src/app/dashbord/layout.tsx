'use client'

import Link from "next/link";
import { FC, ReactNode } from "react"

interface Ichildren {
    children: ReactNode,
}

const DashbordLayout: FC<Ichildren> = ({ children }) => {

    return (
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
                </ul>
            </aside>
            <main
                className="text-blue-300 bg-blue-900 rounded-[20px] grow items-center flex justify-center "
            >
                {children}
            </main>
        </div>
    )
}

export default DashbordLayout