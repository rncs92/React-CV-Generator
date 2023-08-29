import React from 'react'

export default function SkillsDisplay(props) {
  return (
    <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Skills
          </h3>
          {props.technicalSkills ? (
            <div>
              <h4 className="mt-2 text-white text-lg font-medium">
                Techincal Skills
              </h4>
              <p className="text-white ">{props.technicalSkills}</p>
            </div>
          ) : (
            <p></p>
          )}
          {props.softSkills ? (
            <div>
              <h4 className="mt-2 text-white text-lg font-medium">
                Soft Skills
              </h4>
              <p className="text-white">{props.softSkills}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
  )
}
