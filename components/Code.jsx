import React from 'react'

function code({children}) {
  return (
    <div className="bg-zinc-800 py-2 px-4 rounded-xl">
        <span className="text-gray-300">{children}</span>
        
    </div>
  )
}

export default code