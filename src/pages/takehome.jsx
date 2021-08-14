import * as React from "react";
import { v4 as uuid } from "uuid";
import jobList from "../data/jobList";
import { CareerItem } from "../components/career-item";
import { HeadcountBtn } from "../components/buttons";
  
const DisplayError = (props) => {
  let errorMessage = ''
  if (props.title === '') {
    errorMessage = 'Which position are you recruiting for?'
  }
  else if (props.department === '') {
    errorMessage = 'Who is going to take care of this new guy?'
  }
  else if (props.summary === '') {
    errorMessage = 'What is this role even supposed to do?'
  }
  else if (props.headcount === 0) {
    errorMessage = 'Woah, hold it! You cannot add what is not there!'
  }

  return (
    <>
      {errorMessage &&
        <span className='tooltip rounded shadow-lg p-3 bg-gray-200 text-red-500 mt-8'>
          {errorMessage}
        </span>
      }
    </>
  )
}

export const Career = () => {
  const [jobs, setJobs] = React.useState(jobList);
  const [title, setTitle] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [level, setLevel] = React.useState('internship');
  const [summary, setSummary] = React.useState('');
  const [headcount, setHeadcount] = React.useState(1);

  function addJob(e) {
    e.preventDefault();
    const newJobs = [{
      title: title,
      department: department,
      level: level,
      _id: uuid(),
      summary: summary,
      headcount: headcount
    },
    ...jobs]
    setJobs(newJobs);
    setTitle('');
    setDepartment('');
    setLevel('internship');
    setSummary('');
    setHeadcount(1);
  }

  const deleteJob = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };

  return (
    <main className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
        <div className="mb-8">
          <div>
            <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2">
            <form onSubmit={addJob}>
              <div className="
                  bg-white
                  overflow-hidden
                  shadow
                  rounded-lg
                  divide-y divide-gray-200
                ">
                <div className="px-4 py-5 sm:px-6 text-lg">Add Job Posting</div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-5">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-title" className="
                          block
                          text-sm
                          font-medium
                          text-gray-700
                          sm:mt-px sm:pt-2
                        ">
                        Job Title
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="job-title" id="job-title" required className="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md
                          "
                          value={title}
                          onChange={(e) => { setTitle(e.target.value) }} />
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-level" className="
                          block
                          text-sm
                          font-medium
                          text-gray-700
                          sm:mt-px sm:pt-2
                        ">
                        Level
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <select id="job-level" name="job-level" required="" className="
                            block
                            w-full
                            pl-3
                            pr-10
                            py-2
                            text-base
                            border-gray-300
                            focus:outline-none
                            focus:ring-pink-500
                            focus:border-pink-500
                            sm:text-sm
                            rounded-md
                          "
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}>
                          <option value="internship">Internship</option>
                          <option value="entry">Entry</option>
                          <option value="experienced">Experienced</option>
                          <option value="manager">Manager</option>
                        </select>
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-department" className="
                          block
                          text-sm
                          font-medium
                          text-gray-700
                          sm:mt-px sm:pt-2
                        ">
                        Department
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="job-department" id="job-department" required placeholder="e.g. Engineering" className="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md
                          "
                          value={department}
                          onChange={(e) => { setDepartment(e.target.value) }} />
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-summary" className="
                          block
                          text-sm
                          font-medium
                          text-gray-700
                          sm:mt-px sm:pt-2
                        ">
                        Summary
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="job-summary" name="job-summary" rows="4" required className="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border border-gray-300
                            rounded-md
                          "
                          value={summary}
                          onChange={(ev) => setSummary(ev.target.value)}></textarea>
                      </div>
                    </div>

                    <HeadcountBtn
                      headcount={headcount}
                      onIncrement={() => setHeadcount(headcount + 1)}
                      onDecrement={() => setHeadcount(headcount - 1)} />

                  </div>
                </div>
                <div className="px-4 py-4 sm:px-6 text-right">
                  <button className="
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-pink-600
                      hover:bg-pink-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-pink-500
                      has-tooltip
                    "
                    disabled={headcount === 0}>
                    ADD
                    <DisplayError
                      title={title}
                      department={department}
                      level={level}
                      summary={summary}
                      headcount={headcount} />
                    {/* {headcount === 0 &&
                      <span class='tooltip rounded shadow-lg p-3 bg-gray-200 text-red-500 mt-8'>
                        Woah, hold it! Your headcount cannot be zero!
                      </span>
                    } */}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className="md:flex-1 space-y-3">
            {jobs &&
              jobs.map((job, index) => (
                <CareerItem
                  key={job._id}
                  index={index}
                  title={job.title}
                  department={job.department}
                  level={job.level}
                  summary={job.summary}
                  headcount={job.headcount}
                  onDelete={deleteJob}
                />
              ))}
          </ul>
        </div>
      </div>
    </main>)
}