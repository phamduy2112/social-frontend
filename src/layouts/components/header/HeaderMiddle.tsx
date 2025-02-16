import React from 'react'
import { FaGamepad, FaUserFriends } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { MdOndemandVideo } from 'react-icons/md'

function HeaderMiddle() {
  return (
    <div className='flex gap-[1rem]'>
        <div>
        <FiHome />

        </div>
        <div>
        <FaUserFriends  />

        </div>
        <div>
        <MdOndemandVideo  />

        </div>
        <div>
        <FaGamepad  />

        </div>
    </div>
  )
}

export default HeaderMiddle