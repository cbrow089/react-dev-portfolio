import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit it
      console.log('Form is valid');
    }
  };

  return (
    <Layout>
        <section>
          <form  class = "page-body" onSubmit={handleSubmit}>
          <h2>Contact</h2>
              <label>
              Name:
              <br/>
              <input class = "form-layout" type="text" value={name} onChange={(event) => setName(event.target.value)} />
              {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
              </label>
              <label>
              Email:
              <br/>
              <input class = "form-layout"  type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
              </label>
              <label>
              Message:
              <br/>
              <textarea class = "message-box" value={message} onChange={(event) => setMessage(event.target.value)} />
              {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
              </label>
              <button type="submit">Send</button>
          </form>
          <br/>
          <p id = "contact-form-title">Contact Information</p>
          <p class = "contact-form">Name: Coleman Brown</p>
          <p class = "contact-form">Email: cbrow089@yahoo.com</p>
          <p class = "contact-form">Phone: (555) 555-5555</p>
        </section>
    </Layout>
  );
};

export default Contact;