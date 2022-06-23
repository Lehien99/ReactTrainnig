import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62abf002bd0e5d29af17a328.mockapi.io/fakeData`)
      .then((res) => {
        setAPIData(res.data);
      });
  }, []);
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  const getData = () => {
    axios
      .get(`https://62abf002bd0e5d29af17a328.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62abf002bd0e5d29af17a328.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                LastName
              </th>
              <th scope="col" className="px-6 py-3">
                FirstName
              </th>
              <th scope="col" className="px-6 py-3">
                Cheked
              </th>
              <th scope="col" className="px-6 py-3">
                update
              </th>
              <th scope="col" className="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {APIData.map((data) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={data.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {data.lastName}
                  </th>
                  <td className="px-6 py-4">{data.firstName}</td>
                  <td className="px-6 py-4">
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </td>
                  <td className="px-6 py-4">
                    <Link to={"/update/"+data.id}>
                      <button onClick={() => setData(data)}>Update</button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => onDelete(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
