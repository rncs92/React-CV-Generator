import React from 'react'

export default function ProfileDisplay(props) {
  return (
    <div className="mt-6">
            <h3 className="w-1/4 text-xl text-black border-b-4 border-black">
              Profile
            </h3>
            <p className="mt-2 font-sm text-justify">{props.profile}</p>
          </div>
  )
}
