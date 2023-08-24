import "./App.css";

function App() {
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
        <h2 className="text-2xl font-bold font-sans mb-4">General Info</h2>
      </div>
    </div>
  );
}

export default App;
