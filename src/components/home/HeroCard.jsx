"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import Counter from "@/components/common/Counter";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/store/jobsSlice";
// import Image from "next/image";

export const HeroCard = () => {

  const [activeTab, setActiveTab] = useState("job");
  const router = useRouter();

  const dispatch = useDispatch();
  const search = useSelector((state) => state.jobs.search);

  return (
    <section className="bg-bgLight heroCard-bg">
      <div className="container heroCard-wrapper">
        <div className="flex flex-col gap-5 justify-center items-center heroCard-content">

          <div className="heroCard-text flex flex-col gap-5 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight order-1 ">
              The Eassiest Way to Get Your New Job.
            </h1>

            <p className=" text-muted text-white mb-5 order-0">
              Find Job, Employment, and Career Opportunities.
            </p>

          </div>

          <div className="flex gap-10 flex-wrap justify-center counter-cards">
            <Counter
              end={46}
              label="Countries"
              icon={<FontAwesomeIcon icon={faGlobe} />}
            />
            <Counter
              end={450}
              label="Companies"
              icon={<FontAwesomeIcon icon={faBuilding} />}
            />
            <Counter
              end={80000}
              label="Active Employees"
              icon={<FontAwesomeIcon icon={faFileLines} />}
            />
          </div>


          {/* Search Tabs */}
          <div className=" heroCard-form w-full max-w-4xl mt-10">

            {/* Tabs */}
            <div className="heroCard-tabs flex justify-center  rounded-t-xl overflow-hidden ">
              <button
                onClick={() => setActiveTab("job")}
                className={` text-sm btn font-medium transition ${activeTab === "job"
                  ? "tab-active"
                  : "tab-inactive"
                  }`}
              >
                Find a Job
              </button>

              <button
                onClick={() => setActiveTab("candidate")}
                className={` text-sm  btn font-medium transition ${activeTab === "candidate"
                  ? "tab-active"
                  : "tab-inactive"
                  }`}
              >
                Find a Candidate
              </button>
            </div>

            {/* Form */}
            <div className="heroCard-formBox rounded-b-xl shadow-lg p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/browse-jobs");
                }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                {/* Keyword */}
                <input
                  type="text"
                  placeholder={
                    activeTab === "job"
                      ? "eg. Graphic Web Developer"
                      : "eg. John Doe"
                  }
                  value={search}
                  onChange={(e) => dispatch(setSearch(e.target.value))}
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                />

                {/* Category */}
                <select className="border px-4 py-3 rounded-lg">
                  <option>Category</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                </select>

                {/* Location */}
                <input
                  type="text"
                  placeholder="Location"
                  className="border px-4 py-3 rounded-lg"
                />

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-primary  rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Search
                </button>
              </form>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};
