import React from 'react'

export default function LanguagesDisplay(props) {
  return (
    <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Languages
          </h3>
          <p className="mt-2 text-white">{props.languages}</p>
        </div>
  )
}
