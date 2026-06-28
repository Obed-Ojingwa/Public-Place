// File: frontend/src/app/(routes)/contact/page.tsx
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\contact\page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface AuditFormData {
  website: string;
  name: string;
  email: string;
  company: string;
  industry: string;
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'audit'>('contact');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Contact Form
  const { register: registerContact, handleSubmit: handleContactSubmit, reset: resetContact } =
    useForm<ContactFormData>();

  // Audit Form
  const { register: registerAudit, handleSubmit: handleAuditSubmit, reset: resetAudit } =
    useForm<AuditFormData>();

  const onContactSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        resetContact();
        toast.success('Message sent! We\'ll get back to you within 24 hours.');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const onAuditSubmit = async (data: AuditFormData) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        resetAudit();
        toast.success('Audit request submitted! Check your email for instructions.');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit audit request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let's Talk About Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                SEO Goals
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 mb-8"
            >
              We're here to help. Get in touch with our team or request a free audit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">hello@nerdpace.com</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+ 234 810 2544 186 SEO-FAST</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Schedule</h3>
                    <p className="text-slate-600">Book a 30-min call</p>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                      Click here →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Forms */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Tab Buttons */}
              <div className="flex gap-4 mb-8 border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`pb-4 px-4 font-semibold transition-colors border-b-2 ${
                    activeTab === 'contact'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Send a Message
                </button>
                <button
                  onClick={() => setActiveTab('audit')}
                  className={`pb-4 px-4 font-semibold transition-colors border-b-2 ${
                    activeTab === 'audit'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Request an Audit
                </button>
              </div>

              {/* Contact Form */}
              {activeTab === 'contact' && !submitted && (
                <motion.form
                  key="contact-form"
                  onSubmit={handleContactSubmit(onContactSubmit)}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      {...registerContact('name', { required: true })}
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      {...registerContact('email', { required: true })}
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <input
                    {...registerContact('company')}
                    type="text"
                    placeholder="Company Name (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <input
                    {...registerContact('phone')}
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <textarea
                    {...registerContact('message', { required: true })}
                    placeholder="Tell us about your project or question..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              )}

              {/* Audit Form */}
              {activeTab === 'audit' && !submitted && (
                <motion.form
                  key="audit-form"
                  onSubmit={handleAuditSubmit(onAuditSubmit)}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    {...registerAudit('website', { required: true })}
                    type="url"
                    placeholder="Your Website URL"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      {...registerAudit('name', { required: true })}
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      {...registerAudit('email', { required: true })}
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <input
                    {...registerAudit('company')}
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <select
                    {...registerAudit('industry')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="saas">SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="services">Services</option>
                    <option value="agency">Agency</option>
                    <option value="other">Other</option>
                  </select>

                  <p className="text-sm text-slate-500">
                    Our team will analyze your website and send you a detailed report within 2-3 business days.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Submitting...' : 'Request Free Audit'}
                  </button>
                </motion.form>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {activeTab === 'contact' ? 'Message Sent!' : 'Audit Requested!'}
                  </h3>
                  <p className="text-green-700">
                    {activeTab === 'contact'
                      ? 'Thanks for reaching out. We\'ll get back to you within 24 hours.'
                      : 'We\'ve received your request. Check your email for next steps.'}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Got Questions?
            </motion.h2>

            <div className="space-y-4 mt-12">
              {[
                {
                  q: 'How long does it take to get audit results?',
                  a: '2-3 business days. We\'ll email you a detailed report with actionable recommendations.',
                },
                {
                  q: 'What\'s included in the free audit?',
                  a: 'Technical analysis, Lighthouse scores, Core Web Vitals, on-page review, and a prioritized action plan.',
                },
                {
                  q: 'Will you call me?',
                  a: 'Not unless you request it! You can schedule a 30-min consultation call if you want to discuss results.',
                },
                {
                  q: 'What if I need help implementing?',
                  a: 'We offer implementation services. We can discuss options during your consultation call.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 border border-slate-200"
                >
                  <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



// // File: frontend/src/app/(routes)/contact/page.tsx
// // Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\contact\page.tsx

// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';

// interface ContactFormData {
//   name: string;
//   email: string;
//   company: string;
//   phone: string;
//   message: string;
// }

// interface AuditFormData {
//   website: string;
//   name: string;
//   email: string;
//   company: string;
//   industry: string;
// }

// export default function ContactPage() {
//   const [activeTab, setActiveTab] = useState<'contact' | 'audit'>('contact');
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   // Contact Form
//   const { register: registerContact, handleSubmit: handleContactSubmit, reset: resetContact } =
//     useForm<ContactFormData>();

//   // Audit Form
//   const { register: registerAudit, handleSubmit: handleAuditSubmit, reset: resetAudit } =
//     useForm<AuditFormData>();

//   const onContactSubmit = async (data: ContactFormData) => {
//     setSubmitting(true);
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         resetContact();
//         toast.success('Message sent! We\'ll get back to you within 24 hours.');
//         setTimeout(() => setSubmitted(false), 5000);
//       } else {
//         toast.error('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Failed to send message. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const onAuditSubmit = async (data: AuditFormData) => {
//     setSubmitting(true);
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/audit`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         resetAudit();
//         toast.success('Audit request submitted! Check your email for instructions.');
//         setTimeout(() => setSubmitted(false), 5000);
//       } else {
//         toast.error('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Failed to submit audit request. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 },
//     },
//   };

//   return (
//     <main className="overflow-hidden">
//       {/* HERO */}
//       <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.1 }}
//             transition={{ duration: 1 }}
//             className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
//           />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-3xl mx-auto text-center"
//           >
//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
//             >
//               Let's Talk About Your
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
//                 SEO Goals
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-xl text-slate-300 mb-8"
//             >
//               We're here to help. Get in touch with our team or request a free audit.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="py-20 sm:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//             {/* Contact Info Cards */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                     <Mail className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900 mb-1">Email</h3>
//                     <p className="text-slate-600">hello@nerdpace.com</p>
//                     <p className="text-sm text-slate-500">We respond within 24 hours</p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                     <Phone className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
//                     <p className="text-slate-600">+1 (555) SEO-FAST</p>
//                     <p className="text-sm text-slate-500">Mon-Fri, 9am-6pm EST</p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                     <Calendar className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-900 mb-1">Schedule</h3>
//                     <p className="text-slate-600">Book a 30-min call</p>
//                     <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
//                       Click here →
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Forms */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               {/* Tab Buttons */}
//               <div className="flex gap-4 mb-8 border-b border-slate-200">
//                 <button
//                   onClick={() => setActiveTab('contact')}
//                   className={`pb-4 px-4 font-semibold transition-colors border-b-2 ${
//                     activeTab === 'contact'
//                       ? 'border-blue-600 text-blue-600'
//                       : 'border-transparent text-slate-600 hover:text-slate-900'
//                   }`}
//                 >
//                   Send a Message
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('audit')}
//                   className={`pb-4 px-4 font-semibold transition-colors border-b-2 ${
//                     activeTab === 'audit'
//                       ? 'border-blue-600 text-blue-600'
//                       : 'border-transparent text-slate-600 hover:text-slate-900'
//                   }`}
//                 >
//                   Request an Audit
//                 </button>
//               </div>

//               {/* Contact Form */}
//               {activeTab === 'contact' && !submitted && (
//                 <motion.form
//                   key="contact-form"
//                   onSubmit={handleContactSubmit(onContactSubmit)}
//                   className="space-y-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       {...registerContact('name', { required: true })}
//                       type="text"
//                       placeholder="Your Name"
//                       className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                     <input
//                       {...registerContact('email', { required: true })}
//                       type="email"
//                       placeholder="Email Address"
//                       className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <input
//                     {...registerContact('company')}
//                     type="text"
//                     placeholder="Company Name (optional)"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />

//                   <input
//                     {...registerContact('phone')}
//                     type="tel"
//                     placeholder="Phone Number (optional)"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />

//                   <textarea
//                     {...registerContact('message', { required: true })}
//                     placeholder="Tell us about your project or question..."
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     required
//                   />

//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     <Send className="w-4 h-4" />
//                     {submitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </motion.form>
//               )}

//               {/* Audit Form */}
//               {activeTab === 'audit' && !submitted && (
//                 <motion.form
//                   key="audit-form"
//                   onSubmit={handleAuditSubmit(onAuditSubmit)}
//                   className="space-y-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <input
//                     {...registerAudit('website', { required: true })}
//                     type="url"
//                     placeholder="Your Website URL"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       {...registerAudit('name', { required: true })}
//                       type="text"
//                       placeholder="Your Name"
//                       className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                     <input
//                       {...registerAudit('email', { required: true })}
//                       type="email"
//                       placeholder="Email Address"
//                       className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <input
//                     {...registerAudit('company')}
//                     type="text"
//                     placeholder="Company Name"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />

//                   <select
//                     {...registerAudit('industry')}
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Select Industry</option>
//                     <option value="saas">SaaS</option>
//                     <option value="ecommerce">E-commerce</option>
//                     <option value="services">Services</option>
//                     <option value="agency">Agency</option>
//                     <option value="other">Other</option>
//                   </select>

//                   <p className="text-sm text-slate-500">
//                     Our team will analyze your website and send you a detailed report within 2-3 business days.
//                   </p>

//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     <Send className="w-4 h-4" />
//                     {submitting ? 'Submitting...' : 'Request Free Audit'}
//                   </button>
//                 </motion.form>
//               )}

//               {/* Success Message */}
//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
//                 >
//                   <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-green-900 mb-2">
//                     {activeTab === 'contact' ? 'Message Sent!' : 'Audit Requested!'}
//                   </h3>
//                   <p className="text-green-700">
//                     {activeTab === 'contact'
//                       ? 'Thanks for reaching out. We\'ll get back to you within 24 hours.'
//                       : 'We\'ve received your request. Check your email for next steps.'}
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ SECTION */}
//       <section className="py-20 sm:py-24 bg-slate-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl font-bold text-slate-900 mb-4 text-center"
//             >
//               Got Questions?
//             </motion.h2>

//             <div className="space-y-4 mt-12">
//               {[
//                 {
//                   q: 'How long does it take to get audit results?',
//                   a: '2-3 business days. We\'ll email you a detailed report with actionable recommendations.',
//                 },
//                 {
//                   q: 'What\'s included in the free audit?',
//                   a: 'Technical analysis, Lighthouse scores, Core Web Vitals, on-page review, and a prioritized action plan.',
//                 },
//                 {
//                   q: 'Will you call me?',
//                   a: 'Not unless you request it! You can schedule a 30-min consultation call if you want to discuss results.',
//                 },
//                 {
//                   q: 'What if I need help implementing?',
//                   a: 'We offer implementation services. We can discuss options during your consultation call.',
//                 },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   className="bg-white rounded-lg p-6 border border-slate-200"
//                 >
//                   <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
//                   <p className="text-slate-600">{item.a}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }