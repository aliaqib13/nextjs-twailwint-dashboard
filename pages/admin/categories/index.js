import Admin from "layouts/Admin";
import React from "react";

const AllCategories = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded lg:px-10 px-4 pb-10">
            <h1 className=" text-2xl font-semibold my-8">All Catagories </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Catagory Name
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Short Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Desc
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Slug
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>

                    <td className="px-6 py-4">Laptop sdasdas</td>
                    <td className="px-6 py-4">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum voluptates repellat saepe aperiam blanditiis nobis
                      vel illum numquam sint aliquam officia, a non commodi
                      libero iste neque corporis atque? Saepe?
                    </td>
                    <td className="px-6 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;

AllCategories.layout = Admin;
