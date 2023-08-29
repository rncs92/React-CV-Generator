import React from 'react'

export default function InfoDisplay(props) {
  return (
    <>
    <h2 className="mt-6 flex justify-center text-2xl text-white font-bold font-sans mb-4">
          {props.name}
        </h2>
        <div className="flex justify-center">
          <img src={props.imageUrl} alt="" className="w-48 h-48 rounded-full mb-2" />
        </div>
        <p className="flex justify-center text-white italic">{props.objective}</p>
        <div className="flex justify-center px-14 py-4">
          {props.email ? (
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
              {props.email}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}

          {props.phone ? (
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
              {props.phone}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}
        </div>

        <div className="flex justify-center px-14 py-2">
          {props.location ? (
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
              {props.location}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}

          {props.website ? (
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
              {props.website}
            </p>
          ) : (
            <p className="flex text-sm text-white font-normal"></p>
          )}
        </div>
        </>
  )
}
