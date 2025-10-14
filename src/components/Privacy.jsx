import React from "react";
import { useNavigate } from "react-router";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-52 py-20 text-slate-800">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-indigo-700 mb-4 poppins">
          Privacy Policy
        </h1>
        <p className="inter text-slate-600 text-base md:text-lg">
          Last updated: October 14, 2025
        </p>
      </div>

      <div className="space-y-10 text-justify leading-relaxed inter text-[15px] md:text-base text-slate-700">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to the official website of the Department of Computer Science and
            Engineering, Jahangirnagar University (CSE-JU). We are committed to
            protecting your personal information and your right to privacy. This
            policy outlines how we collect, use, and safeguard the data you share
            while using our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            2. Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email address,
            and message details when you contact us through the website. In addition,
            anonymous analytical data such as browser type, device, and interaction
            statistics may be collected to improve our user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            3. How We Use Your Information
          </h2>
          <p>
            The collected information helps us respond to your inquiries, improve our
            website, and ensure the content is relevant and accessible. We do not sell
            or share your data with third parties for commercial purposes. Data may be
            used for internal academic, administrative, or security purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            4. Data Security
          </h2>
          <p>
            We take reasonable measures to protect your information against
            unauthorized access, alteration, disclosure, or destruction. All sensitive
            data transmissions are encrypted, and access to personal data is strictly
            limited to authorized personnel.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            5. Cookies and Tracking
          </h2>
          <p>
            Our website may use cookies to enhance your browsing experience. These
            cookies help remember your preferences and gather anonymous analytics.
            You can disable cookies in your browser settings, but some features may
            not function as intended.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external resources, research sites, or
            academic platforms. We are not responsible for the privacy practices of
            these external sites. We encourage users to review the privacy policies of
            any linked websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            7. Your Rights
          </h2>
          <p>
            You have the right to access, update, or request deletion of your personal
            information that we hold. For any privacy-related requests or questions,
            please contact the CSE-JU Department through our official channels.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            8. Updates to This Policy
          </h2>
          <p>
            This Privacy Policy may be updated periodically to reflect changes in our
            practices or for other operational, legal, or regulatory reasons. Updates
            will be posted on this page with a revised “Last Updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
            9. Contact Information
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our
            data handling practices, please contact us at: <br />
            <span className="text-indigo-600 font-medium">
              cse@juniv.edu
            </span>
          </p>
        </section>
      </div>

      <div className="flex justify-center mt-16">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 inter"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Privacy;
