import { useState, useEffect } from "react";
// https://www.youtube.com/watch?v=IYCa1F-OWmk
export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  let pageNumbers = [];
  //   Find total number for redirect last page
  let pageNumbersTotal = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    pageNumbersTotal.push(i);
  }
  //   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //     pageNumbersTotal.push(i);
  //   }

  let nowPageIndex = pageNumbers
    .filter((number) => number > currentPage - 3)
    .filter((number) => number < currentPage + 3);
  //   pageNumbers.filter((number) => number < currentPage + 2);
  //   console.log(nowPageIndex);
  //   console.log(currentPage);

  pageNumbers.length = 0; // Clear contents
  pageNumbers.push.apply(pageNumbers, nowPageIndex); // Append new contents
  return (
    <div>
      {/* ------------------- */}
      {/* <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul> */}
      {/* ------------------- */}

      <nav aria-label="Page navigation" className="text-center">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              //   onClick={() =>
              //     currentPage <= 1
              //       ? setCurrentPage(currentPage)
              //       : setCurrentPage(currentPage - 1)
              //   }
              onClick={() =>
                currentPage <= 1
                  ? setCurrentPage(currentPage)
                  : setCurrentPage(1)
              }
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xs"
            >
              首頁
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xs"
              >
                {number}
              </a>
            </li>
          ))}
          <li>
            <a
              //   onClick={() =>
              //     currentPage === pageNumbers.length
              //       ? setCurrentPage(currentPage)
              //       : setCurrentPage(currentPage + 1)
              //   }
              onClick={() =>
                currentPage === pageNumbers.length
                  ? setCurrentPage(currentPage)
                  : setCurrentPage(pageNumbersTotal.length)
              }
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xs"
            >
              最後
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
