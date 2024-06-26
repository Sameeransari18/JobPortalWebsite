import React from "react";
import "./Contact.css";

function Contact() {
  const handleSendMessage = () => {
    const emailAddress = "support@aristostech.in";
    const subject = "Regarding Your Website";
    const body = "Hello,"; // Include the message in the body

    // Create the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <div className="w-100 h-100 contact">
        <div className="container-xxl py-5 ">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Contact For Any Query
            </h1>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center contact-card rounded p-4">
                      <div
                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-map-marker-alt contact-icon"></i>
                      </div>
                      <span className="text">
                        4th Floor, Murugesan Naicker Complex, Greams Rd,
                        Thousand Lights, Chennai
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center contact-card  rounded p-4">
                      <div
                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-envelope-open contact-icon"></i>
                      </div>
                      <span className="text">shabittajsameer786@gmail.com</span>
                    </div>
                  </div>
                  <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center contact-card  rounded p-4">
                      <div
                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-phone-alt contact-icon"></i>
                      </div>
                      <span className="text">+91 9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.662317968078!2d80.25119577484293!3d13.057153387266187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266124464b70f%3A0x2650e302faec4d26!2sColan%20Infotech!5e0!3m2!1sen!2sin!4v1714224348111!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ minHeight: "400px", border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="col-md-6 rounded shadow-sm">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                  <form className="contact-form">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn send-btn  w-100 py-3"
                          type="button"
                          onClick={handleSendMessage}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
