import React from "react";
import { Link } from "react-router-dom";

const COLORS = {
  primary: "#00bfff",
  white: "#f8f8f8",
  black: "#3b3b3b",
};

const AnimatedIllustration = () => (
  <div className="flex justify-center mb-4 mt-6">
    <svg
      width="80"
      height="80"
      viewBox="0 0 160 160"
      fill="none"
      className="animate-fadeIn"
    >
      <circle cx="80" cy="80" r="70" fill={COLORS.primary} opacity="0.12" />
      <rect x="40" y="50" width="80" height="60" rx="14" fill={COLORS.primary} className="animate-pulse" />
      <rect x="55" y="70" width="50" height="8" rx="4" fill={COLORS.white} />
      <rect x="55" y="85" width="35" height="8" rx="4" fill={COLORS.white} />
      <circle cx="120" cy="105" r="8" fill={COLORS.white} />
      <circle cx="50" cy="105" r="8" fill={COLORS.white} />
      <rect x="75" y="100" width="10" height="8" rx="4" fill={COLORS.black} />
    </svg>
  </div>
);

const BlueDotList = ({ children }) => (
  <ul className="pl-0 mt-4 space-y-2">
    {React.Children.map(children, (child) => (
      <li className="flex items-start" style={{ color: COLORS.black }}>
        <span
          className="mr-2"
          style={{
            color: COLORS.primary,
            fontSize: "1.3em",
            lineHeight: 1,
            fontWeight: "bold",
          }}
        >
          •
        </span>
        <span>{child}</span>
      </li>
    ))}
  </ul>
);

const Highlight = ({ children }) => (
  <span style={{ color: COLORS.black, fontWeight: 700, fontStyle: "italic" }}>
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2
      className="text-2xl md:text-3xl font-bold mb-4"
      style={{ color: COLORS.primary }}
    >
      {title}
    </h2>
    <div className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.black }}>
      {children}
    </div>
    <div
      className="w-full border-b-2 border-dotted mt-10 mb-2 opacity-30"
      style={{ borderColor: COLORS.primary }}
    ></div>
  </section>
);

const RefundCancellation = () => {
  return (
    <div
      className="min-h-screen py-12 px-4 md:px-16"
      style={{ background: COLORS.white }}
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedIllustration />
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 mt-8"
          style={{ color: COLORS.black }}
        >
          Refund & Cancellation Policy
        </h1>
        <p
          className="text-center font-medium mb-16 text-lg md:text-xl"
          style={{ color: COLORS.primary }}
        >
          Please read our refund and cancellation policy carefully.
        </p>

        <div className="text-left">
          <Section title="Design Policy">
            <p>
              We provide demo websites to our clients so that they can check our quality of work and become comfortable before working with us. Before making a payment for our services, feel free to contact us if you have any queries.
            </p>
          </Section>

          <Section title="Eligibility for Refund">
            <p>
              Every project is important to us and is handled with care and professionalism. We always strive to deliver the desired project to our clients on time. However, if a client is not satisfied or changes their plan regarding the project and wants a refund, they should check their eligibility for our refund policy listed below:
            </p>
          </Section>

          <Section title="Advance Payment Policy">
            <BlueDotList>
              <span>
                When you are comfortable with taking our service, you have to make a <Highlight>30% payment in advance</Highlight> for hiring us for any kind of services which we provide.
              </span>
              <span>
                If you want to cancel the project <Highlight>within 2 days</Highlight> of advance payment, then this 30% payment is fully refundable.
              </span>
              <span>
                <Highlight>After 2 days</Highlight> of advance payment, if you cancel the project, then this advance money will <Highlight>not be refundable</Highlight>.
              </span>
            </BlueDotList>
          </Section>

          <Section title="Delivery Time & Payment">
            <BlueDotList>
              <span>
                <Highlight>Full Refund:</Highlight> In case the project has not been started or has not been delivered according to the deal.
              </span>
              <span>
                <Highlight>Partial Refund:</Highlight> If the project work has already been started and the client wants to cancel the project in between, then the total advance money (25%) will not be refundable.
              </span>
              <span>
                <Highlight>No Refund:</Highlight> When full payment is received after successful delivery of the project and then if a client wants to cancel the project, the whole money will be non-refundable.
              </span>
            </BlueDotList>
          </Section>

          <Section title="Change in Policy">
            <p>
              We can change this policy from time to time without any prior notice. We request you to review this policy periodically. If any changes occur in our policy, then our existing as well as new clients will be agreed with our new policy.
            </p>
          </Section>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="inline-block px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            style={{
              background: COLORS.primary,
              color: COLORS.white,
              fontSize: "1.1rem",
              letterSpacing: "1px",
              border: "none",
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = COLORS.black;
              e.currentTarget.style.color = COLORS.white;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = COLORS.primary;
              e.currentTarget.style.color = COLORS.white;
            }}
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

export default RefundCancellation;