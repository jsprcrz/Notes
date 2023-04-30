import React, { useState } from "react";

import { courseInfo } from "../../Constants/index";
import { Search } from "../../Components";

// import { DiGoogleDrive, FiExternalLink } from "react-icons/ai";

const Notes = () => {
  const [filteredCourseInfo, setFilteredCourseInfo] = useState(courseInfo);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredCourseInfo(courseInfo);
    } else {
      // Filter by course name or code
      const filtered = courseInfo
        .map((course) => {
          const filteredCourses = course.courses.filter(
            (c) =>
              c.name.toLowerCase().includes(query.toLowerCase()) ||
              c.code.toLowerCase().includes(query.toLowerCase())
          );
          return {
            ...course,
            courses: filteredCourses,
          };
        })
        .filter((course) => course.courses);
      setFilteredCourseInfo(filtered);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div
        id="notes"
        className="noteContainer flex gap-10 justify-center flex-wrap items-center py-10"
      >
        {/* Iterate through each course */}
        {filteredCourseInfo.flatMap((terms) =>
          terms.courses.map((course) => (
            <div
              key={course.code}
              className="group group/item singleNote select-none w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-gray-100 shadow-lg shadow-greyIsh-400/700 hover:shawdow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-cyan-800">
                  {course.code}
                </h1>
                <span className="bg-blue-100 text-blue-800 text-[12px] font-light mr-2 px-2.5 py-0.5 rounded-full">
                  {terms.title}
                </span>
              </span>
              <h2 className="text-[12px] font-light text-gray-400 truncate">
                {course.name}
              </h2>

              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]">
                <span className="flex justify-start items-center gap-5">
                  {course.links.map((link, index) => (
                    <div key={index}>
                      {link.link !== "" && (
                        <a href={link.link} target="_blank">
                          <button className="bg-blueColor p-2 px-5 rounded-md text-white hover:bg-blue-900">
                            {link.name}
                          </button>
                        </a>
                      )}
                    </div>
                  ))}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Notes;
