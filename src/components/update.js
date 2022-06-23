import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const {idList} = useParams();

  useEffect(() => {
    axios.get(`https://62abf002bd0e5d29af17a328.mockapi.io/fakeData/${idList}`)
    .then((res)=>{
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setCheckbox(res.data.checkbox);
      // console.log(res.data.checkbox)
    })
    // setID(localStorage.getItem("ID"));
    // setFirstName(localStorage.getItem("First Name"));
    // setLastName(localStorage.getItem("Last Name"));
    // setCheckbox(localStorage.getItem("Checkbox Value"));
  }, [idList]);
  const updateAPIData = () => {
    axios.put(`https://62abf002bd0e5d29af17a328.mockapi.io/fakeData/${idList}`, {
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="LastName"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                checked={checkbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setCheckbox(!checkbox)}
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>

            <button
              onClick={updateAPIData}
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
};

export default Update;
