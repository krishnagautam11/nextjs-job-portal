"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faGear,
  faArrowUpRightDots,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeCTA() {
  return (
    <section className="homeCta-section">
      <div className="custom-container">
        <div className="homeCta-grid">

          <div className="homeCta-card">
            <FontAwesomeIcon icon={faFileLines} />
            <h3>Search Millions of Jobs</h3>
            <p>
              A small river named Duden flows by their place and supplies.
            </p>
          </div>

          <div className="homeCta-card">
            <FontAwesomeIcon icon={faGear} />
            <h3>Easy To Manage Jobs</h3>
            <p>
              A small river named Duden flows by their place and supplies.
            </p>
          </div>

          <div className="homeCta-card">
            <FontAwesomeIcon icon={faArrowUpRightDots} />
            <h3>Top Careers</h3>
            <p>
              A small river named Duden flows by their place and supplies.
            </p>
          </div>

          <div className="homeCta-card">
            <FontAwesomeIcon icon={faUsers} />
            <h3>Search Expert Candidates</h3>
            <p>
              A small river named Duden flows by their place and supplies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
