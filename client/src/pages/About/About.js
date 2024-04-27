import React from "react";
import { JobImg } from "../../assets";
import "./About.css";

const About = () => {
  return (
    <div className="about-banner mx-auto d-flex flex-column gap-4 py-6 pt-5">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-md-row gap-4 items-center p-3">
          <div className="w-100 md:w-8/12 2xl:w-6/12">
            <h1 className="text-4xl font-bold mb-6 about-title">
              <span className="ab">About</span> Us
            </h1>
            <p className="text-xl font-light leading-relaxed">
              Discover exciting career opportunities with our job portal. At Job
              Portal, we are committed to connecting talented individuals with
              their dream jobs. Our platform provides a diverse range of job
              listings, from entry-level positions to executive roles, across
              various industries.
            </p>
            <p className="text-lg font-light leading-relaxed mt-4">
              Join us in shaping the future of employment and fostering a
              community where both employers and job seekers thrive. Start your
              journey with Job Portal today, where opportunities meet talent.
            </p>
          </div>
          <img src={JobImg} alt="About" className="about-img" />
        </div>
        <div className="text-lg font-light leading-relaxed px-3 pb-5">
          <p>
            Job Portal is not just a job board; it's a gateway to your future.
            Our commitment goes beyond connecting job seekers with employers; we
            focus on creating meaningful connections that lead to long-lasting
            career satisfaction.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold about-subtitle">
              Why choose Job Portal?
            </h3>
            <ul className="list-disc list-inside mt-4">
              <li className="mb-3">
                <strong className="text-lightseagreen">
                  Comprehensive Job Listings:
                </strong>{" "}
                Access a wide array of job opportunities across various
                industries and sectors.
              </li>
              <li className="mb-3">
                <strong className="text-lightseagreen">
                  Personalized Profiles:
                </strong>{" "}
                Build a standout profile that showcases your skills, experience,
                and aspirations.
              </li>
              <li className="mb-3">
                <strong className="text-lightseagreen">
                  Career Resources:
                </strong>{" "}
                Explore valuable resources, tips, and insights to boost your
                career growth.
              </li>
              <li className="mb-3">
                <strong className="text-lightseagreen">
                  Employer Partnerships:
                </strong>{" "}
                We collaborate with leading companies to bring you exclusive job
                opportunities.
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold about-subtitle">
              Additional Details:
            </h3>
            <ul className="list-disc list-inside mt-4">
              <li className="mb-3">
                <strong className="text-lightseagreen">Location:</strong> We
                have job listings nationwide, providing opportunities in various
                cities and regions.
              </li>
              <li className="mb-3">
                <strong className="text-lightseagreen">Industry Focus:</strong>{" "}
                Job Portal caters to a wide range of industries, ensuring
                diverse job options for all professionals.
              </li>
              <li className="mb-3">
                <strong className="text-lightseagreen">
                  Support and Guidance:
                </strong>{" "}
                Our team is dedicated to supporting you throughout your job
                search journey, providing guidance and assistance when needed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
