import { getusers } from '@/core/api/users'
import { Iusers } from '@/core/type/Iusers'
import Image from 'next/image'
import React from 'react'

interface contactProp {
    user: Iusers
}

const ContactUsers = async ({ user }:contactProp ) => {

    return (
        <div>
            <div className="flex flex-col border border-zinc-800 ">
                <div className="flex justify-center gap-3.5 ">
                    <div>{user.name}</div>
                    <Image
                        width={100}
                        height={100}
                        src={user.avatar}
                        alt='without image'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUsers