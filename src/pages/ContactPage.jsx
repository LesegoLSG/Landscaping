import React, { useState, useEffect } from "react";
import BannerImg from "../assets/Images/BannerImages/BannerImg.jpg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import InputField from "../components/Reusables/InputField";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission logic (e.g., send data to an API)
  };

  return (
    <section className="w-full">
      {/* Top section with image and title */}
      <div
        className="w-full h-80 flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="h1">Contact</h1>
          <p>Get in touch for better and more deals</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row  gap-8 my-4">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 px-4">
          <div className="mb-6">
            <h2 className="h2">Send Us a Message</h2>
            <p className="text-neutral-700">
              Have a question, need a quote, or just want to say hello? Fill out
              the form below and we’ll get back to you as soon as possible.
              We’re here to help with all your tree cutting and garden
              maintenance needs.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex gap-4">
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                label="Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-neutral-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-48 p-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>

        {/* More Details and Map */}
        <div className="w-full md:w-1/3 p-4 bg-secondary text-white rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
          <p className="my-4">
            We’re here to help with all your tree cutting and garden maintenance
            needs. Whether you need advice, a free quote, or emergency
            assistance, feel free to reach out. Our team is dedicated to
            providing fast, friendly, and professional service in your area.
          </p>
          <div className="flex flex-col gap-4 my-8">
            <div className="flex items-center border border-white  py-4 px-2 ">
              <FaLocationDot
                className="inline-block mr-2 text-accent"
                size={25}
              />
              <p>1376 Matlomo Street Moletsane</p>
            </div>
            <div className="flex items-center border border-white  py-4 px-2">
              <FaPhone className="inline-block mr-2 text-accent" size={25} />
              <p>064 037 3089</p>
            </div>
            <div className="flex items-center border border-white py-4 px-2">
              <MdEmail className="inline-block mr-2 text-accent" size={25} />
              <p>lesegomhlongo78@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 mt-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.500075055477!2d28.019853148079743!3d-26.194137220151824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95c9a4db1b8b91%3A0x420da0102b7fe023!2s1376%20Matlomo%20St%2C%20Moletsane%2C%20Johannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1644288192786!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
