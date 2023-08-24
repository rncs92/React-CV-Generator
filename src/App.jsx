import "./App.css";

function App() {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gray-100 p-4">
      <h2 className="text-2xl font-bold font-sans mb-4">Please fill the form</h2>
      <div className="p-4">
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="name" className="mb-2 text-lg font-sans font-medium">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
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
            className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
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
              className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
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
              className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
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
              className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
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
              className="mt-1 px-3 py-2 block border-2 border-green-600 rounded"
            />
          </div>
        </div>
        </div>


        <div className="p-4">
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
              className="border-2 border-green-600 rounded px-4 py-2"
            />
          </div>
        </div>


        <div className="p-4">
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
              className="border-2 border-green-600 rounded px-4 py-2"
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
                className="border-2 border-green-600 rounded px-4 py-2"
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
              className="border-2 border-green-600 rounded px-4 py-2"
            />
          </div>
        </div>
      </div>

      
      <div className="w-1/2 bg-gray-200 p-4"></div>
    </div>
  );
}

export default App;
