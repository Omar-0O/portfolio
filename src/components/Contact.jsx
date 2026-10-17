import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from './hoc/SectionWrapper';
import { slideIn } from '../utils/motion';
import Socials from './Socials';
import { toast } from 'react-toastify';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const notify = ({ type, message }) =>
    toast(message, {
      type: type,
      className: 'bg-primary-semi border border-tertiary text-inherit',
      progressClassName: 'bg-tertiary',
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.message ||
      !form.email.includes('@')
    ) {
      notify({
        type: 'error',
        message: 'Please fill all fields with valid values.',
      });

      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (n) => {
          setLoading(false);
          notify({
            type: 'success',
            message: 'Thank you. I will get back to you as soon as possible.',
          });
        },
        (error) => {
          setLoading(false);
          notify({
            type: 'error',
            message:
              error.text ||
              'Error occurred. Try contacting me via email or other methods.',
          });
        }
      );
  };

  return (
    <div
      className={`flex xl:items-start xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] relative bg-transparent border-tertiary border-2 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} sm:mb-6 mb-4`}>Contact</h3>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 gap-3 mb-8 sm:grid-cols-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 p-3 transition-all border rounded-xl bg-primary-semi/80 border-tertiary/40 hover:border-tertiary group"
            title="Send Email"
          >
            <div className="p-2.5 transition-colors rounded-lg bg-tertiary-transparent text-tertiary group-hover:bg-tertiary group-hover:text-primary shrink-0">
              <Mail size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase font-semibold tracking-wider text-white-200">
                Email
              </p>
              <p className="text-xs font-medium text-white truncate group-hover:text-tertiary transition-colors">
                {PERSONAL_INFO.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 p-3 transition-all border rounded-xl bg-primary-semi/80 border-tertiary/40 hover:border-tertiary group"
            title="Call Phone"
          >
            <div className="p-2.5 transition-colors rounded-lg bg-tertiary-transparent text-tertiary group-hover:bg-tertiary group-hover:text-primary shrink-0">
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase font-semibold tracking-wider text-white-200">
                Phone
              </p>
              <p className="text-xs font-medium text-white truncate group-hover:text-tertiary transition-colors">
                {PERSONAL_INFO.phone}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-3 border rounded-xl bg-primary-semi/80 border-tertiary/40">
            <div className="p-2.5 rounded-lg bg-tertiary-transparent text-tertiary shrink-0">
              <MapPin size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase font-semibold tracking-wider text-white-200">
                Location
              </p>
              <p className="text-xs font-medium text-white truncate">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200 placeholder:opacity-50"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200 placeholder:opacity-50"
            />
          </label>


          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type message"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200 placeholder:opacity-50"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:align-center sm:gap-0">
            <button
              type="submit"
              className="px-8 py-3 cta w-fit"
              disabled={loading}
              data-text={loading ? 'Sending..😊' : 'Say Hello'}
            >
              {loading ? 'Sending..😊' : 'Say Hello'}
              <div className="cta-border"></div>
            </button>
            <Socials />
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 self-stretch xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const contactComponent = SectionWrapper(
  Contact,
  'contact',
  `min-h-screen w-full ${styles.padding} 
max-w-[clamp(350px,100vw,1500px)] mx-auto sm:pb-24  pb-40`
);

export default contactComponent;
