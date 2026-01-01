import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) setTitleVisible(true);
            if (entry.target === contentRef.current) setContentVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="container mx-auto contact py-8">
      <div className="contact-container">
        <div
          ref={titleRef}
          className={`main-title scroll-animate text-center ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl">
            Contact <span className="text-[#3061bb]">Me</span>
          </h2>
        </div>
        <div
          ref={contentRef}
          className={`contact-content-con grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 scroll-animate ${
            contentVisible ? "animate" : ""
          }`}
        >
          <div>
            <h4 className="text-2xl">Contact me here</h4>
            <p className="mt-2">
              Interested in working together? <br /> let's connect via
              <span className="inline-flex items-center ml-2">
                <a
                  href="https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/"
                  target="_blank"
                  className="mr-3 transition-colors duration-300 hover:text-[#3061bb]"
                >
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a
                  href="https://twitter.com/ShedrachMorris8"
                  target="_blank"
                  className="mr-3 transition-colors duration-300 hover:text-[#1da1f2]"
                >
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
                <a
                  href="https://github.com/ShedrachMorris"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-[#333]"
                >
                  <i className="fab fa-github text-3xl"></i>
                </a>
              </span>
            </p>
            <div className="contact-info mt-4 space-y-3 text-[#dbe1e8]">
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>: Lagos, Nigeria</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>: shedrachuzo4190@gmail.com</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>: Dalewares Institute Of Technology</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <i className="fas fa-phone"></i>
                  <span>Mobile</span>
                </div>
                <p>: 09050721435</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>: English</p>
              </div>
            </div>
          </div>
          <div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form space-y-4 bg-[#0f1720] p-6 rounded"
            >
              <input
                type="hidden"
                name="access_key"
                value="9baf501a-207b-4c7e-8210-6e7ccfaff80c"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="NAME"
                  required
                  placeholder="YOUR NAME"
                  className="p-2 bg-[#0b0f13] rounded"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="YOUR EMAIL"
                  className="p-2 bg-[#0b0f13] rounded"
                />
              </div>
              <input
                type="text"
                name="text"
                required
                placeholder="ENTER SUBJECT"
                className="w-full p-2 bg-[#0b0f13] rounded"
              />
              <textarea
                name="message"
                cols="15"
                rows="8"
                placeholder="Message Here..."
                className="w-full p-2 bg-[#0b0f13] rounded"
              ></textarea>
              <button
                type="submit"
                className="submit-btn bg-[#3061bb] px-4 py-2 rounded inline-flex items-center"
              >
                <span className="sub-btn">SUBMIT</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
