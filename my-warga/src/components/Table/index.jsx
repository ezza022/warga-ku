import React from "react";
import { Link } from "react-router-dom";

function Table({ users, search, handleRemoveUser }) {
  return (
    <table className="min-w-full table-auto">
      <thead className="justify-between">
        <tr className="bg-gray-800">
          <th className=" py-2">
            <span className="text-gray-300">Profil</span>
          </th>
          <th className="px-28 py-2">
            <span className="text-gray-300">Nama</span>
          </th>
          <th className="py-2">
            <span className="text-gray-300">No. Telp</span>
          </th>
          <th className="py-2">
            <span className="text-gray-300">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {users
          ? users
              .filter((user) =>
                search !== ""
                  ? user.data.fName === search ||
                    user.data.lName === search ||
                    `${user.data.fName} ${user.data.lName}` === search
                  : true
              )
              .map((user, index) => (
                <tr key={index} className="bg-white border-4 border-gray-200">
                  <td className="py-2 flex flex-row items-center justify-center">
                    <img
                      className="h-16 w-16 rounded-full object-cover "
                      src="http://simpleicon.com/wp-content/uploads/user.png"
                      alt=""
                    />
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {`${user.data.fName} ${user.data.lName}`}
                    </span>
                  </td>
                  <td className="py-2">
                    <span>{user.data.num}</span>
                  </td>
                  <td className=" py-2 space-x-2">
                    <Link
                      className="text-sm no-underline text-black bg-green-300 hover:bg-green-400 cursor-pointer focus:outline-none rounded border-0 py-2 px-5"
                      to={`/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleRemoveUser(user.id)}
                      className="text-sm bg-red-300 hover:bg-red-400 cursor-pointer focus:outline-none rounded border-0 py-2 px-5"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
          : null}
      </tbody>
    </table>
  );
}

export default Table;
