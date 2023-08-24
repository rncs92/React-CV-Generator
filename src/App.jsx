import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");

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

  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold font-sans mb-4">
          Please fill the form
        </h2>
        <div className="p-4">
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

        <div className="p-4">
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
              type="text"
              placeholder="Info"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
        </div>

        <div className="p-4">
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
            <input
              name="description"
              id="description"
              type="text"
              placeholder="Description"
              className="mt-1 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-gray-200 p-4">
        <div className="w-1/2 bg-white">
          <p>Profile</p>
        </div>
      </div>

      <div className="w-1/2 bg-sky-800">
        <h2 className="mt-6 flex justify-center text-2xl text-white font-bold font-sans mb-4">
          {name}
        </h2>
        <div className="flex justify-between px-14 py-4">
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
          <p className="flex text-sm text-white font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 h-5 w-5 text-white"
            >
              <path
                className="fill-white"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              ></path>
            </svg>
            {phone}
          </p>
          <p className="flex text-sm text-white font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 h-5 w-5 text-white"
            >
              <path
                className="fill-white"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              ></path>
            </svg>
            {location}
          </p>
          <p className="flex text-sm text-white font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 h-5 w-5 text-white"
            >
              <path
                className="fill-white"
                d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
              ></path>
            </svg>
            {website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
