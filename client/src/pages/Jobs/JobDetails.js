import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./Jobdetails.css";

const JobDetails = () => {
  const { id } = useParams();

  const [jobDetails, setJobDetails] = useState(null);
  const [error, setError] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/app/v1/job/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJobDetails(response.data);
      } catch (error) {
        setError(error.message || "Error fetching job details");
      }
    };

    fetchData();
  }, [id]);

  const handleClose = () => {
    setAppliedSuccess(false);
  };

  const handleApplyNow = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:8000/app/v1/job/${id}/apply-job`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Job Applied Successfully!!");
      setAppliedSuccess(true); // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      setError(error.message || "Error applying for job");
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!jobDetails) {
    return <p>Loading...</p>;
  }

  const {
    title,
    description,
    industry,
    jobType,
    jobLocation,
    salary,
    createdAt,
    status,
    preferredEducation,
    preferredSkill,
    preferredExperience,
  } = jobDetails.job;
  const companyLogoUrl = jobDetails.job.companyLogoUrl.src;
  return (
    <div className="job-details">
      <div
        className="container-xxl text-left py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src={companyLogoUrl}
                  alt="company logo"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">{title}</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {jobLocation}
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-primary me-2"></i>
                    {jobType}
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-primary me-2"></i>$
                    {salary.min} - ${salary.max}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="mb-3">Job description</h4>
                <p>{description}</p>
                <h4 className="mb-3">Qualifications</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    {preferredEducation}
                  </li>
                </ul>
                <h4 className="mb-3">Skills Required</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    {preferredSkill}
                  </li>
                </ul>
                <h4 className="mb-3">Experience</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    {preferredExperience.min} - {preferredExperience.max} years
                  </li>
                </ul>
                <h4 className="mb-3">Salary</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>$
                    {salary.min} - ${salary.max}{" "}
                  </li>
                </ul>
                <h4 className="mb-3">Industry</h4>
                <p>{industry}</p>
              </div>

              <div className="row g-3">
                <div className="col-2">
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </button>
                  {/* Show success message if appliedSuccess state is true */}
                  {/* Display success overlay if appliedSuccess is true */}
                  {appliedSuccess && (
                    <div className="success-overlay">
                      <div className="success-message">
                        <div className="tick">
                          <i className="fa fa-check"></i>
                        </div>
                        <p>Job Applied Successfully!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-light rounded p-5 mb-4 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Job Summery</h4>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Published On: {moment(createdAt).format("MMMM D, YYYY")} (
                  {moment(createdAt).fromNow()})
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>Job
                  Nature: {jobType}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Salary:${salary.min} - ${salary.max}{" "}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Location: {jobLocation}
                </p>
                <p className="m-0">
                  <i className="fa fa-angle-right text-primary me-2"></i>Status:{" "}
                  {status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
