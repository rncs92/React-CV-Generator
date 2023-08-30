import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import SkillsDisplay from "./components/SkillsDisplay";
import LanguagesDisplay from "./components/LanguagesDisplay";
import ProfileDisplay from "./components/ProfileDisplay";
import EducationsDisplay from "./components/EducationsDisplay";
import InfoDisplay from "./components/InfoDisplay";
import WorkExperiencesDisplay from "./components/WorkExperiencesDisplay";
import html2pdf from "html2pdf.js";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [objective, setObjective] = useLocalStorage("objective", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [website, setWebsite] = useLocalStorage("website", "");
  const [location, setLocation] = useLocalStorage("location", "");

  const [profile, setProfile] = useLocalStorage("profile", "");

  const [educationId, setEducationId] = useLocalStorage("educationId", 2);
  const [educations, setEducations] = useState([
    {
      id: 1,
      school: "",
      schoolYears: "",
      degree: "",
      gpa: "",
      educationInfo: "",
    },
  ]);

  const [workExperienceId, setWorkExperienceId] = useState(2);
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      company: "",
      jobTitle: "",
      workYears: "",
      workDescription: "",
    },
  ]);

  const [technicalSkills, setTechnicalSkills] = useLocalStorage(
    "technicalSkills",
    ""
  );
  const [softSkills, setSoftSkills] = useLocalStorage("softSkills", "");

  const [languages, setLanguages] = useLocalStorage("languages", "");

  const [imageUrl, setImageUrl] = useLocalStorage("image", "");

  function addEducation() {
    setEducations([
      ...educations,
      {
        id: educationId,
        school: "",
        schoolYears: "",
        degree: "",
        gpa: "",
        educationInfo: "",
      },
    ]);

    setEducationId((prevEducationId) => prevEducationId + 1);
  }

  function deleteEducation(id) {
    setEducations([...educations.filter((education) => education.id !== id)]);
  }

  function addWorkExperience() {
    setWorkExperiences([
      ...workExperiences,
      {
        id: workExperienceId,
        company: "",
        jobTitle: "",
        workYears: "",
        workDescription: "",
      },
    ]);

    setWorkExperienceId((prevWorkExperienceId) => prevWorkExperienceId + 1);
  }

  function deleteWorkExperience(id) {
    setWorkExperiences([
      ...workExperiences.filter((workExperience) => workExperience.id !== id),
    ]);
  }

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleObjectiveInput(event) {
    setObjective(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePhoneInput(event) {
    setPhone(event.target.value);
  }

  function handleWebsiteInput(event) {
    setWebsite(event.target.value);
  }

  function handleLocationInput(event) {
    setLocation(event.target.value);
  }

  function handleProfileInput(event) {
    setProfile(event.target.value);
  }

  function handleSchoolInput(event, educationId) {
    const updatedEducations = educations.map((education) =>
      education.id === educationId
        ? { ...education, school: event.target.value }
        : education
    );

    setEducations(updatedEducations);
  }

  function handleSchoolYearsInput(event, educationId) {
    const updatedEducations = educations.map((education) =>
      education.id === educationId
        ? { ...education, schoolYears: event.target.value }
        : education
    );

    setEducations(updatedEducations);
  }

  function handleDegreeInput(event, educationId) {
    const updatedEducations = educations.map((education) =>
      education.id === educationId
        ? { ...education, degree: event.target.value }
        : education
    );

    setEducations(updatedEducations);
  }

  function handleGpaInput(event, educationId) {
    const updatedEducations = educations.map((education) =>
      education.id === educationId
        ? { ...education, gpa: event.target.value }
        : education
    );

    setEducations(updatedEducations);
  }

  function handleEducationInfoInput(event, educationId) {
    const updatedEducations = educations.map((education) =>
      education.id === educationId
        ? { ...education, educationInfo: event.target.value }
        : education
    );

    setEducations(updatedEducations);
  }

  function handleCompanyInput(event, workExperienceId) {
    const updatedWorkExperiences = workExperiences.map((workExperience) =>
      workExperience.id === workExperienceId
        ? { ...workExperience, company: event.target.value }
        : workExperience
    );

    setWorkExperiences(updatedWorkExperiences);
  }

  function handleJobTitleInput(event, workExperienceId) {
    const updatedWorkExperiences = workExperiences.map((workExperience) =>
      workExperience.id === workExperienceId
        ? { ...workExperience, jobTitle: event.target.value }
        : workExperience
    );

    setWorkExperiences(updatedWorkExperiences);
  }

  function handleWorkYearsInput(event, workExperienceId) {
    const updatedWorkExperiences = workExperiences.map((workExperience) =>
      workExperience.id === workExperienceId
        ? { ...workExperience, workYears: event.target.value }
        : workExperience
    );

    setWorkExperiences(updatedWorkExperiences);
  }

  function handleWorkDescriptionInput(event, workExperienceId) {
    const updatedWorkExperiences = workExperiences.map((workExperience) =>
      workExperience.id === workExperienceId
        ? { ...workExperience, workDescription: event.target.value }
        : workExperience
    );

    setWorkExperiences(updatedWorkExperiences);
  }

  function handleTechnicalSkillsInput(event) {
    setTechnicalSkills(event.target.value);
  }

  function handleSoftSkillsInput(event) {
    setSoftSkills(event.target.value);
  }

  function handleLanguagesInput(event) {
    setLanguages(event.target.value);
  }

  function handleImageUpload(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);

      setImageUrl(imageUrl);
    }
  }

  function downloadCv() {
    const element = document.getElementById("cv-content");
    const opt = {
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  }

  return (
    <div className="flex h-full">
      <div className="w-1/2 overflow-y-auto h-screen bg-gray-200 p-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold font-sans mb-4">
            Please fill the form
          </h2>
          <button
            className="w-1/5 mb-3 py-1 flex items-center justify-center bg-violet-900 rounded-xl text-white outline-none hover:bg-violet-700  cursor-pointer"
            onClick={downloadCv}
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </button>
        </div>
        <div className="p-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <div className="flex flex-col w-full mb-2">
            <label
              htmlFor="name"
              className="mb-2 text-lg font-sans font-medium"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              value={name}
              onChange={handleNameInput}
              type="text"
              placeholder="Enter your name"
              className="mt-1 pg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <label
              htmlFor="profilePhoto"
              className="w-2/6 py-1 bg-violet-800 cursor-pointer rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex items-center justify-center"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Upload Photo
            </label>
            <input
              className="hidden"
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <label
              htmlFor="objective"
              className="mb-2 text-lg font-sans font-medium"
            >
              Objective
            </label>
            <input
              name="objective"
              id="objective"
              value={objective}
              onChange={handleObjectiveInput}
              type="text"
              placeholder="Objective"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
          <div className="flex space-x-4 mb-2">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="mb-2 text-lg font-sans font-medium"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                value={email}
                onChange={handleEmailInput}
                type="email"
                placeholder="Enter your email"
                className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="mb-2 text-lg font-sans font-medium"
              >
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                value={phone}
                onChange={handlePhoneInput}
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="website"
                className="mb-2 text-lg font-sans font-medium"
              >
                Website
              </label>
              <input
                name="website"
                id="website"
                value={website}
                onChange={handleWebsiteInput}
                type="text"
                placeholder="Website"
                className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="location"
                className="mb-2 text-lg font-sans font-medium"
              >
                Location
              </label>
              <input
                name="location"
                id="location"
                value={location}
                onChange={handleLocationInput}
                type="text"
                placeholder="Location"
                className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
            </svg>
            Profile
          </h2>
          <div className="flex space-x-4 mb-2">
            <div className="flex flex-col w-full">
              <label
                htmlFor="profile"
                className="mb-2 text-lg font-sans font-medium"
              >
                Introduce yourself
              </label>
              <textarea
                id="profile"
                value={profile}
                onChange={handleProfileInput}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Introduce yourself"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              ></path>
            </svg>
            Education
          </h2>

          {educations.map((education) => (
            <ul
              className="p-2 mb-2 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl"
              key={education.id}
            >
              <div className="flex justify-end">
                <button onClick={() => deleteEducation(education.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-red-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex space-x-4 mb-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="school"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    School
                  </label>
                  <input
                    name="school"
                    id="school"
                    defaultValue={education.school}
                    onChange={(event) => handleSchoolInput(event, education.id)}
                    type="text"
                    placeholder="School"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="schoolYears"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    Years
                  </label>
                  <input
                    name="schoolYears"
                    id="schoolYears"
                    defaultValue={education.schoolYears}
                    onChange={(event) =>
                      handleSchoolYearsInput(event, education.id)
                    }
                    type="text"
                    placeholder="Years"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="degree"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    Degree
                  </label>
                  <input
                    name="degree"
                    id="degree"
                    defaultValue={education.degree}
                    onChange={(event) => handleDegreeInput(event, education.id)}
                    type="text"
                    placeholder="Degree"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="flex flex-col w-ful">
                  <label
                    htmlFor="gpa"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    GPA
                  </label>
                  <input
                    name="gpa"
                    id="gpa"
                    defaultValue={education.gpa}
                    onChange={(event) => handleGpaInput(event, education.id)}
                    type="text"
                    placeholder="GPA"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mb-2">
                <label
                  htmlFor="info"
                  className="mb-2 text-lg font-sans font-medium"
                >
                  Additional Information
                </label>
                <input
                  name="info"
                  id="info"
                  defaultValue={education.educationInfo}
                  onChange={(event) =>
                    handleEducationInfoInput(event, education.id)
                  }
                  type="text"
                  placeholder="Info"
                  className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                />
              </div>
            </ul>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={addEducation}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
              Add School
            </button>
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              ></path>
            </svg>
            Work Experience
          </h2>
          {workExperiences.map((workExperience) => (
            <ul
              className="p-2 mb-2 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl"
              key={workExperience.id}
            >
              <div className="flex justify-end">
                <button onClick={() => deleteWorkExperience(workExperience.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-red-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col w-full mb-2">
                <label
                  htmlFor="company"
                  className="mb-2 text-lg font-sans font-medium"
                >
                  Company
                </label>
                <input
                  name="company"
                  id="company"
                  defaultValue={workExperience.company}
                  onChange={(event) =>
                    handleCompanyInput(event, workExperience.id)
                  }
                  type="text"
                  placeholder="Company"
                  className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col w-full mb-2">
                  <label
                    htmlFor="title"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    Job Title
                  </label>
                  <input
                    name="title"
                    id="title"
                    defaultValue={workExperience.jobTitle}
                    onChange={(event) =>
                      handleJobTitleInput(event, workExperience.id)
                    }
                    type="text"
                    placeholder="Job Title"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="flex flex-col w-full mb-2">
                  <label
                    htmlFor="years"
                    className="mb-2 text-lg font-sans font-medium"
                  >
                    Years
                  </label>
                  <input
                    name="years"
                    id="years"
                    defaultValue={workExperience.workYears}
                    onChange={(event) =>
                      handleWorkYearsInput(event, workExperience.id)
                    }
                    type="text"
                    placeholder="Years"
                    className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="description"
                  className="mb-2 text-lg font-sans font-medium"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  defaultValue={workExperience.workDescription}
                  onChange={(event) =>
                    handleWorkDescriptionInput(event, workExperience.id)
                  }
                  type="text"
                  placeholder="Description"
                  className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                />
              </div>
            </ul>
          ))}

          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={addWorkExperience}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
              Add Experience
            </button>
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path d="M0 224.2C0 100.6 100.2 0 224 0h32c95.2 0 174.2 69.3 189.4 160.1c2.2 13 6.7 25.7 15 36.1l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM285.3 208H336c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48c5.6 0 11-1 16-2.7V288c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3c5 1.8 10.4 2.7 16 2.7c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16zM160 176v2.7l-.1 0c0-.9 .1-1.8 .1-2.7z"></path>
            </svg>
            Skills
          </h2>
          <div className="flex flex-col w-full mb-2">
            <label
              htmlFor="company"
              className="mb-2 text-lg font-sans font-medium"
            >
              Technical Skills
            </label>
            <input
              name="company"
              id="company"
              value={technicalSkills}
              onChange={handleTechnicalSkillsInput}
              type="text"
              placeholder="Technical skills"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="description"
              className="mb-2 text-lg font-sans font-medium"
            >
              Soft Skills
            </label>
            <input
              name="description"
              id="description"
              value={softSkills}
              onChange={handleSoftSkillsInput}
              type="text"
              placeholder="Soft skills"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"></path>
            </svg>
            Languages
          </h2>
          <div className="flex flex-col w-full mb-2">
            <label
              htmlFor="company"
              className="mb-2 text-lg font-sans font-medium"
            >
              Languages
            </label>
            <input
              name="company"
              id="company"
              value={languages}
              onChange={handleLanguagesInput}
              type="text"
              placeholder="Technical skills"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
        </div>
      </div>

      <div id="cv-content" className="w-fit flex">
        <div className="w-1/2 bg-white ml-4">
          <div className="w-4/5 bg-white">
            <ProfileDisplay profile={profile} />
            <WorkExperiencesDisplay workExperiences={workExperiences} />
          </div>
        </div>

        <div className="w-1/2 bg-sky-800">
          <InfoDisplay
            name={name}
            imageUrl={imageUrl}
            objective={objective}
            email={email}
            phone={phone}
            location={location}
            website={website}
          />
          <EducationsDisplay educations={educations} />

          <SkillsDisplay
            technicalSkills={technicalSkills}
            softSkills={softSkills}
          />

          <LanguagesDisplay languages={languages} />
        </div>
      </div>
    </div>
  );
}

export default App;
