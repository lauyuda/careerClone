import React from 'react';

export const HeadcountBtn = ({ headcount, onIncrement, onDecrement }) => {
    return (
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
        <label htmlFor="headcount" className="
          block
          text-sm
          font-medium
          text-gray-700
          sm:mt-px sm:pt-2
        ">
          Headcount
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="relative w-32">
            <button type="button" className="
              absolute
              left-0
              inset-y-0
              px-1.5
              text-gray-400
            " id="headcount-minus-btn"
              disabled={headcount === 0}
              onClick={onDecrement}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input type="text" name="headcount" id="headcount" required="" className="
              block
              w-full
              px-9
              text-center
              shadow-sm
              sm:text-sm
              focus:ring-pink-500 focus:border-pink-500
              border-gray-300
              rounded-md
            " value={headcount} readOnly />
            <button type="button" className="
              absolute
              right-0
              inset-y-0
              px-1.5
              text-gray-400
            " id="headcount-plus-btn"
              onClick={onIncrement}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
          <div id="headcount-error" className={"text-red-500 text-xs pt-1 " + (headcount === 0 ? '' : 'hidden')}>
            Headcount must be at least 1.
          </div>
        </div>
      </div>
    )
  };

export const DeleteButton = (props) => {
    const [isDelete, setIsDelete] = React.useState(false)

    return (
        <>
            {isDelete ?
                <span className="font-normal text-gray-500">
                    Delete?
                </span>
                :
                <button
                    type="button"
                    className="js-delete-btn p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-gray-500 focus:ring-opacity-30 transition duration-150 ease-in-out"
                    title="Delete"
                    onClick={() => setIsDelete(true)}
                >
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            }

            <TickButton isDelete={isDelete} setIsDelete={setIsDelete} onClick={props.onClick} />
            <CrossButton isDelete={isDelete} setIsDelete={setIsDelete} />
        </>
    );
};

export const TickButton = (props) => {
    return (
        <button
            type="button"
            className={(props.isDelete ? '' : 'hidden ') + "js-delete-btn p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-green-500 focus:ring-opacity-30 transition duration-150 ease-in-out"}
            title="Confirm"
            onClick={props.onClick}
        >
            <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="forestgreen"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        </button>
    );
};

export const CrossButton = (props) => {
    return (
        <button
            type="button"
            className={(props.isDelete ? '' : 'hidden ') + "js-delete-btn p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out"}
            title="Cancel"
            onClick={() => props.setIsDelete(false)}
        >
            <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="indianred"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
        </button >
    );
};