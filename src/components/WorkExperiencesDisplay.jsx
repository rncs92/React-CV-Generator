import React from "react";

export default function WorkExperiencesDisplay(props) {
  return (
    <div className="mt-6">
      <h3 className="w-2/4 text-xl text-black border-b-4 border-black">
        Work Experience
      </h3>
      {props.workExperiences.map((workExperience) => (
        <ul key={workExperience.id}>
          <div className="flex mt-2">
            <p className="font-sm">{workExperience.workYears}</p>
          </div>
          <div className="flex">
            {workExperience.jobTitle ? (
              <p className="font-sm font-medium">{workExperience.jobTitle},</p>
            ) : (
              <p></p>
            )}
            <p className="ml-2 font-sm italic">{workExperience.company}</p>
          </div>
          <div className="flex">
            <p className="ml-4 mt-2 font-sm text-justify">
              {workExperience.workDescription}
            </p>
          </div>
        </ul>
      ))}
    </div>
  );
}
