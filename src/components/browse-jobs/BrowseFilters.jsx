"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSearch, setLocation, setJobType, clearFilters } from "@/store/jobsSlice";

export default function BrowseFilters() {
  const dispatch = useDispatch();
  const { search, location, jobType } = useSelector((s) => s.jobs);

  return (
    <div className="filters-box">

      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search..."
      />
     
      <h3>Location</h3>
      {["Remote", "Bangalore"].map((loc) => (
        <label key={loc}>
          <input
            type="radio"
            checked={location === loc}
            onChange={() => dispatch(setLocation(loc))}
          />
          {loc}
        </label>
      ))}

      <h3>Job Type</h3>
      {["Full-time", "Part-time", "Internship"].map((type) => (
        <label key={type}>
          <input
            type="radio"
            checked={jobType === type}
            onChange={() => dispatch(setJobType(type))}
          />
          {type}
        </label>
      ))}

      <button className="btn secondary-button" onClick={() => dispatch(clearFilters())}>Clear Filters</button>
    </div>
  );
}

