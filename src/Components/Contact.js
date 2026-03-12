import React from "react";

export default function Contact() {

  const config = {
    email: "esudharsan79@gmail.com",
    phone: "8428349978"
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h1>Contact</h1>
        <p>If you want to discuss more in detail, please contact me</p>
        <p><span>Email:</span> {config.email}</p>
        <p><span>Phone:</span> {config.phone}</p>
      </div>
    </section>
  );
}