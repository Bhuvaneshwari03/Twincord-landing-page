import React from "react";
import { Link } from "react-router-dom";

const AnimatedIllustration = () => (
  <div className="flex justify-center mb-1 mt-6">
    <svg
      width="100"
      height="100"
      viewBox="0 0 160 160"
      fill="none"
      className="animate-fadeIn"
    >
      <circle cx="80" cy="80" r="70" fill="#00bfff" opacity="0.12" />
      <rect x="40" y="50" width="80" height="60" rx="14" fill="#00bfff" className="animate-pulse" />
      <rect x="55" y="70" width="50" height="8" rx="4" fill="#f8f8f8" />
      <rect x="55" y="85" width="35" height="8" rx="4" fill="#f8f8f8" />
      <circle cx="120" cy="105" r="8" fill="#f8f8f8" />
      <circle cx="50" cy="105" r="8" fill="#f8f8f8" />
      <rect x="75" y="100" width="10" height="8" rx="4" fill="#3b3b3b" />
    </svg>
  </div>
);

const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold text-[#00bfff] mb-4">{title}</h2>
    <div className="text-[#222] text-base md:text-lg leading-relaxed">{children}</div>
    <div className="w-full border-b-2 border-dotted border-[#00bfff] mt-10 mb-2 opacity-30"></div>
  </section>
);

const CustomList = ({ children }) => (
  <ul className="pl-0 mt-4 space-y-3">
    {React.Children.map(children, (child) => (
      <li
        className="relative pl-6 text-[#1a237e] font-medium"
        style={{
          borderLeft: "3px dotted #1a237e",
          marginLeft: 0,
          paddingLeft: 18,
        }}
      >
        <span className="absolute left-0 top-2 w-2 h-2 bg-[#1a237e] rounded-full"></span>
        {child}
      </li>
    ))}
  </ul>
);

const Policies = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedIllustration />
        <h1 className="text-4xl md:text-4xl font-extrabold text-center text-[#222] mb-4 mt-8">
          Terms and Conditions
        </h1>
        <p className="text-center text-[#00bfff] font-medium mb-16 text-lg md:text-xl">
          Welcome to Twincord Technologies Private Limited
        </p>

        <div className="text-left">
          {/* Merged Introduction & Terminology */}
         <section className="mb-16">
  <div className="text-[#222] text-base md:text-lg leading-relaxed">
    <p className="mb-4">
      These terms and conditions outline the rules and regulations for the use of Twincord Technologies Private Limited's Website, located at <span className="text-[#00bfff] font-semibold">twincord.com</span>.
    </p>
    <p className="mb-6">
      By accessing this website, we assume you accept these terms and conditions. Do not continue to use <span className="font-semibold">twincord.com</span> if you do not agree to all of the terms and conditions stated on this page.
    </p>
    <ul className="list-none space-y-2">
      <li>
        <span className="font-bold">Client, You, Your:</span>
        <span> Refers to you, the person logging on this website and compliant to the Company's terms and conditions.</span>
      </li>
      <li>
        <span className="font-bold">The Company, Ourselves, We, Our, Us:</span>
        <span> Refers to our Company.</span>
      </li>
      <li>
        <span className="font-bold">Party, Parties, Us:</span>
        <span> Refers to both the Client and ourselves.</span>
      </li>
    </ul>
  </div>
  <div className="w-full border-b-2 border-dotted border-[#00bfff] mt-10 mb-2 opacity-30"></div>
</section>

          <Section title="Cookies">
            <p>
              We employ the use of cookies. By accessing <span className="font-semibold">twincord.com</span>, you agreed to use cookies in agreement with the Twincord Technologies Private Limited's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </Section>

          <Section title="License">
            <p>
              Unless otherwise stated, Twincord Technologies Private Limited and/or its licensors own the intellectual property rights for all material on <span className="font-semibold">twincord.com</span>. All intellectual property rights are reserved. You may access this from <span className="font-semibold">twincord.com</span> for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <CustomList>
              <span>Republish material from twincord.com</span>
              <span>Sell, rent or sub-license material from twincord.com</span>
              <span>Reproduce, duplicate or copy material from twincord.com</span>
              <span>Redistribute content from twincord.com</span>
            </CustomList>
          </Section>

          <Section title="User Comments">
            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Twincord Technologies Private Limited does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Twincord Technologies Private Limited, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
            </p>
            <CustomList>
              <span>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</span>
              <span>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</span>
              <span>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</span>
              <span>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</span>
            </CustomList>
          </Section>

          <Section title="Hyperlinking to our Content">
            <p>
              The following organizations may link to our Website without prior written approval:
            </p>
            <CustomList>
              <span>Government agencies</span>
              <span>Search engines</span>
              <span>News organizations</span>
              <span>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</span>
              <span>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website</span>
            </CustomList>
            <p className="mt-2">
              These organizations may link to our home page, to publications or to other Website information so long as the link is not in any way deceptive, does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services, and fits within the context of the linking party's site.
            </p>
          </Section>

          <Section title="iFrames">
            <p>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
          </Section>

          <Section title="Content Liability">
            <p>
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </Section>

          <Section title="Reservation of Rights">
            <p>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>
          </Section>

          <Section title="Removal of links from our website">
            <p>
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <CustomList>
              <span>limit or exclude our or your liability for death or personal injury;</span>
              <span>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</span>
              <span>limit any of our or your liabilities in any way that is not permitted under applicable law; or</span>
              <span>exclude any of our or your liabilities that may not be excluded under applicable law.</span>
            </CustomList>
            <p className="mt-2">
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </Section>

          {/* Payment Terms with blue left border */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00bfff] mb-4">Payment Terms</h2>
            <div className="bg-[#e6f7ff] border-l-8 border-[#00bfff] p-6 rounded-lg mb-2 animate-fadeIn shadow-sm">
              <p className="font-semibold text-[#3b3b3b]">
                For all service projects, <span className="text-[#00bfff]">50% advance payment</span> is required before project initiation. The remaining <span className="text-[#00bfff]">50% payment</span> must be completed upon project delivery, prior to handover. Project work will commence only after the advance is received.
              </p>
            </div>
            <div className="w-full border-b-2 border-dotted border-[#00bfff] mt-10 mb-2 opacity-30"></div>
          </section>

          <Section title="Contact Us">
            <p>
              For any questions about our terms, please contact us at <a href="mailto:info@twincord.com" className="text-[#00bfff] underline">info@twincord.com</a>.
            </p>
          </Section>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="inline-block bg-[#00bfff] text-[#f8f8f8] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#0099cc] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: none;}
          }
        `}
      </style>
    </div>
  );
};

export default Policies;