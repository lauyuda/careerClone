import * as React from "react";
import { DeleteButton } from "../components/buttons";

function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const WorkingBagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
    >
      <path
        fillRule="evenodd"
        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
    </svg>
  );
};

const CareerItemTitle = (props) => {
  return (
    <div className="text-sm leading-5 font-medium text-pink-600 truncate">
      {props.title}
      <span className="ml-1 font-normal text-gray-500">
        in {props.department}
      </span>
    </div>
  );
};

const ExperienceLevel = (props) => {
  return (
    <>
      <span>Level: {capitalise(props.level)} </span>
      {props.level === 'internship' && <span className="
                              inline-flex
                              items-center
                              px-2.5
                              py-0.5
                              rounded-full
                              text-xs
                              font-medium
                              bg-green-100
                              text-green-800
                            ">
        Student-friendly
      </span>}
    </>
  );
};

export function CareerItem({
  index,
  title,
  department,
  level,
  summary,
  headcount,
  onDelete,
}) {
  return (
    <li>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="
            min-w-0
            flex-1
            sm:flex sm:items-center sm:justify-between
          ">
            <div>
              <CareerItemTitle title={title} department={department} />
              <div className="mt-2 flex">
                <div className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  leading-5
                  text-gray-500
                ">
                  <WorkingBagIcon />
                  <ExperienceLevel level={level} />
                </div>
              </div>
            </div>
          </div>
          <div className="
            ml-5
            flex-shrink-0
            inline-flex
            items-center
            justify-center
            gap-2
          ">
            <DeleteButton onClick={() => onDelete(index)} />
          </div>
        </div>
      </div>
    </li>
  );
}
