import { Iusers } from '@/core/type/Iusers'
import Image from 'next/image'
import React from 'react'

interface contactProp {
    value: Iusers
}

const ContactUsers : React.FC<contactProp> = async ({ value }) => {

    return (
        <div>
            <div className="flex flex-col border border-zinc-800 ">
                <div className="flex justify-between items-center w-60 gap-3.5 ">
                    <div className='w-25 ml-4 '>{value.name}</div>
                    <Image
                        width={100}
                        height={100}
                        src={value.avatar}
                        alt='without image'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUsers