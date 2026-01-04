/* eslint-disable no-nested-ternary */
/* eslint-disable implicit-arrow-linebreak */
import './contact.scss';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Send } from '@mui/icons-material';
import axios from 'axios';

const ContactWrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
  `;

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mayadege',
      data: inputs,
    })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  useEffect(() => {
    if (status.submitted) {
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      }, 5000);
    }
  }, [status.submitted]);

  return (
    <ContactWrapper className="contact" id="contact">
      <Left className="left">
        <h2 className="contact-title">Let’s discuss</h2>
        <h2 className="contact-subtitle">
          on something
          {' '}
          <span className="accent">cool</span>
          {' '}
          together
        </h2>
        <p className="contact-label">I’m interested in ..</p>
        <div className="chips">
          {[
            'Ecommerce Website',
            'App Development',
            'Web Development',
            'UI/UX Design',
          ].map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
      </Left>
      <Right className="right">

        <form onSubmit={handleOnSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleOnChange}
            className="form-control"
            required
            value={inputs.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            id="email"
            onChange={handleOnChange}
            value={inputs.email}
            required
          />
          <textarea
            placeholder="Enter your message"
            className="form-control"
            name="message"
            maxLength="500"
            id="message"
            value={inputs.message}
            onChange={handleOnChange}
            required
          />

          <button type="submit" disabled={status.submitting}>
            <Send className="cta-icon" />
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </button>
          {status.info.error && (
            <Error>
              Error:
              {' '}
              {status.info.msg}
            </Error>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </form>
      </Right>
    </ContactWrapper>
  );
};

export default Contact;
