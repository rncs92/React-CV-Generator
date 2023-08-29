import React from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [objective, setObjective] = useLocalStorage("objective", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [website, setWebsite] = useLocalStorage("website", "");
  const [location, setLocation] = useLocalStorage("location", "");

  const [profile, setProfile] = useLocalStorage("profile", "");

  const [school, setSchool] = useLocalStorage("school", "");
  const [schoolYears, setSchoolYears] = useLocalStorage("schoolYears", "");
  const [degree, setDegree] = useLocalStorage("degree", "");
  const [gpa, setGpa] = useLocalStorage("gpa", "");
  const [educationInfo, setEducationInfo] = useLocalStorage(
    "educationInfo",
    ""
  );

  const [company, setCompany] = useLocalStorage("company", "");
  const [jobTitle, setJobTitle] = useLocalStorage("jobTitle", "");
  const [workYears, setWorkYears] = useLocalStorage("workYears", "");
  const [workDescription, setWorkDescription] = useLocalStorage(
    "workDescription",
    ""
  );

  const [technicalSkills, setTechnicalSkills] = useLocalStorage(
    "technicalSkills",
    ""
  );
  const [softSkills, setSoftSkills] = useLocalStorage("softSkills", "");

  const [languages, setLanguages] = useLocalStorage("languages", "");

  const [imageUrl, setImageUrl] = useLocalStorage("image", "");

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

  function handleSchoolInput(event) {
    setSchool(event.target.value);
  }

  function handleSchoolYearsInput(event) {
    setSchoolYears(event.target.value);
  }

  function handleDegreelInput(event) {
    setDegree(event.target.value);
  }

  function handleGpaInput(event) {
    setGpa(event.target.value);
  }

  function handleEducationInfoInput(event) {
    setEducationInfo(event.target.value);
  }

  function handleCompanyInput(event) {
    setCompany(event.target.value);
  }

  function handleJobTitleInput(event) {
    setJobTitle(event.target.value);
  }

  function handleWorkYearsInput(event) {
    setWorkYears(event.target.value);
  }

  function handleWorkDescriptionInput(event) {
    setWorkDescription(event.target.value);
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

  return (
    <div className="flex h-full">
      <div className="w-1/2 overflow-y-auto h-screen bg-gray-200 p-4">
        <h2 className="text-2xl font-bold font-sans mb-4">
          Please fill the form
        </h2>
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
              className="w-2/6 py-1 bg-blue-600 cursor-pointer rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex items-center justify-center"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                htmlFor="school"
                className="mb-2 text-lg font-sans font-medium"
              >
                Introduce yourself
              </label>
              <textarea
                id="message"
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
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              ></path>
            </svg>
            Education
          </h2>
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
                value={school}
                onChange={handleSchoolInput}
                type="text"
                placeholder="School"
                className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="year"
                className="mb-2 text-lg font-sans font-medium"
              >
                Years
              </label>
              <input
                name="year"
                id="year"
                value={schoolYears}
                onChange={handleSchoolYearsInput}
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
                value={degree}
                onChange={handleDegreelInput}
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
                value={gpa}
                onChange={handleGpaInput}
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
              value={educationInfo}
              onChange={handleEducationInfoInput}
              type="text"
              placeholder="Info"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
        </div>

        <div className="p-4 mt-4 bg-gray-100 border-gray-300 border-2 rounded-lg shadow-xl">
          <h2 className="flex mr-2 text-xl font-bold font-sans mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-6 w-6 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              ></path>
            </svg>
            Work Experience
          </h2>
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
              value={company}
              onChange={handleCompanyInput}
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
                value={jobTitle}
                onChange={handleJobTitleInput}
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
                value={workYears}
                onChange={handleWorkYearsInput}
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
              value={workDescription}
              onChange={handleWorkDescriptionInput}
              type="text"
              placeholder="Description"
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

      <div className="w-1/2 bg-white p-4">
        <div className="w-4/5 bg-white">
          <div className="mt-6">
            <h3 className="w-1/4 text-xl text-black border-b-4 border-black">
              Profile
            </h3>
            <p className="mt-2 font-sm text-justify">{profile}</p>
          </div>
          <div className="mt-6">
            <h3 className="w-2/4 text-xl text-black border-b-4 border-black">
              Work Experience
            </h3>
            <div className="flex mt-2">
              <p className="font-sm">{workYears}</p>
            </div>
            <div className="flex">
              {jobTitle ? (
                <p className="font-sm font-medium">{jobTitle},</p>
              ) : (
                <p></p>
              )}
              <p className="ml-2 font-sm italic">{company}</p>
            </div>
            <div className="flex">
              <p className="ml-4 mt-2 font-sm text-justify">
                {workDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-sky-800">
        <h2 className="mt-6 flex justify-center text-2xl text-white font-bold font-sans mb-4">
          {name}
        </h2>
        <div className="flex justify-center">
          <img src={imageUrl} alt="" className="w-48 h-48 rounded-full mb-2" />
        </div>
        <p className="flex justify-center text-white italic">{objective}</p>
        <div className="flex justify-center px-14 py-4">
          {email ? (
            <p className="flex text-sm text-white font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 h-5 w-5"
              >
                <path
                  className="fill-white"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                ></path>
              </svg>
              {email}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}

          {phone ? (
            <p className="flex text-sm text-white font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 ml-2 h-5 w-5 text-white"
              >
                <path
                  className="fill-white"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                ></path>
              </svg>
              {phone}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}
        </div>

        <div className="flex justify-center px-14 py-2">
          {location ? (
            <p className="flex text-sm text-white font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 ml-2 h-5 w-5 text-white"
              >
                <path
                  className="fill-white"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                ></path>
              </svg>
              {location}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}

          {website ? (
            <p className="flex text-sm text-white font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 ml-2 h-5 w-5 text-white"
              >
                <path
                  className="fill-white"
                  d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
                ></path>
              </svg>
              {website}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}
        </div>

        <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Education
          </h3>
          <div className="mt-2 flex">
            <h4 className="text-white font-medium">{school}</h4>
            {schoolYears ? (
              <p className="ml-4 text-white">
                <b>Years:</b> {schoolYears}
              </p>
            ) : (
              <p className="text-white"></p>
            )}
          </div>
          <div className="mt-1 flex">
            <p className="text-white italic">{degree}</p>
            {gpa ? (
              <p className="ml-4 text-white">
                <b>GPA:</b> {gpa}
              </p>
            ) : (
              <p className="text-white"></p>
            )}
          </div>
          {educationInfo ? (
            <p className="mt-1 text-white italic">
              <b>Additional Info:</b> {educationInfo}
            </p>
          ) : (
            <p className="text-white"></p>
          )}
        </div>

        <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Skills
          </h3>
          {technicalSkills ? (
            <div>
              <h4 className="mt-2 text-white text-lg font-medium">
                Techincal Skills
              </h4>
              <p className="text-white ">{technicalSkills}</p>
            </div>
          ) : (
            <p></p>
          )}
          {softSkills ? (
            <div>
              <h4 className="mt-2 text-white text-lg font-medium">
                Soft Skills
              </h4>
              <p className="text-white">{softSkills}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <div className="px-14 py-4">
          <h3 className="w-1/4 text-xl text-white border-b-4 border-white">
            Languages
          </h3>
          <p className="mt-2 text-white">{languages}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
