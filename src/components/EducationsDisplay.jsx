import React from 'react'

export default function EducationsDisplay(props) {
  return (
    <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Education
          </h3>
          {props.educations.map((education) => (
            <ul key={education.id}>
              <div className="mt-2 flex">
                <h4 className="text-white font-medium">{education.school}</h4>
                {education.schoolYears ? (
                  <p className="ml-4 text-white">
                    <b>Years:</b> {education.schoolYears}
                  </p>
                ) : (
                  <p className="text-white"></p>
                )}
              </div>
              <div className="mt-1 flex">
                <p className="text-white italic">{education.degree}</p>
                {education.gpa ? (
                  <p className="ml-4 text-white">
                    <b>GPA:</b> {education.gpa}
                  </p>
                ) : (
                  <p className="text-white"></p>
                )}
              </div>
              {education.educationInfo ? (
                <p className="mt-1 text-white italic">
                  <b>Additional Info:</b> {education.educationInfo}
                </p>
              ) : (
                <p className="text-white"></p>
              )}
            </ul>
          ))}
        </div>
  )
}
