import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post("https://62abf002bd0e5d29af17a328.mockapi.io/fakeData", {
      firstName,
      lastName,
      checkbox,
    });
  };
  return (
    <div>
      <div className="bg-grey-lighter flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="FirtName"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="LastName"
              placeholder="LastName"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={e=>setCheckbox(!checkbox)}
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>

            <button
              onClick={postData}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Create;
