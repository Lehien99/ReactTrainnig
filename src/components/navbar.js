import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="inline-flex my-7">
          <Link to="/create">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Create
            </button>
          </Link>
          <Link to="/Read">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Read
            </button>
          </Link>
  
      </div>
    </div>
 
  );
};
export default Navbar;
