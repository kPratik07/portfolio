import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  const disposableDomains = new Set([
    "10minutemail.com",
    "guerrillamail.com",
    "mailinator.com",
    "tempmail.com",
    "throwaway.email",
    "yopmail.com",
  ]);
  const email = formData.email.trim().toLowerCase();
  const emailDomain = email.split("@")[1] ?? "";
  const isFormValid =
    formData.name.trim().length > 0 &&
    emailPattern.test(email) &&
    !disposableDomains.has(emailDomain) &&
    formData.subject.trim().length > 0 &&
    formData.message.trim().length > 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === "email") {
      setEmailError("");
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const domain = email.split("@")[1] ?? "";

    if (!emailPattern.test(email) || disposableDomains.has(domain)) {
      e.preventDefault();
      setEmailError("Enter a valid, non-disposable email address.");
    }
  };

  return (
    <section
      id="contact"
      className="contact-section relative min-h-screen scroll-mt-0 overflow-hidden px-6 pb-6 pt-12 text-slate-900 sm:px-10 lg:flex lg:items-start lg:px-8 lg:pb-8 lg:pt-24"
    >
      <div className="contact-dots" aria-hidden="true" />
      <div className="contact-rings" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1060px]">
        <h1 className="mb-1 text-center text-4xl font-bold tracking-tight sm:text-4xl">
          Contact <span className="text-violet-600">Me</span>
        </h1>
        <div className="mb-3 flex items-center justify-center gap-5 text-sm font-medium text-violet-600">
          <span className="h-px w-24 bg-violet-500" />
          <span className="flex items-center gap-3">
            <i className="fas fa-circle text-[7px]" /> Get In Touch{" "}
            <i className="fas fa-circle text-[7px]" />
          </span>
          <span className="h-px w-24 bg-violet-500" />
        </div>
        <p className="mx-auto mb-4 max-w-[520px] text-center text-[13px] font-medium leading-5 text-slate-600">
          Let’s turn great ideas into meaningful digital experiences.
        </p>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.45fr] md:items-stretch">
          <div className="contact-panel relative h-auto self-start overflow-hidden rounded-lg bg-white px-6 py-5 shadow-[0_10px_30px_rgba(71,56,130,0.08)] sm:px-7 md:h-full md:self-stretch">
            <h2 className="mb-2 text-xl font-bold">
              Let's <span className="text-violet-600">Connect</span>
            </h2>
            <div className="mb-4 h-0.5 w-6 bg-violet-600" />
            <p className="mb-4 text-[11px] leading-4 text-slate-600">
              Let’s connect and create something amazing together,
              <br /> whether it’s big or small, for mobile or web.
              <br />
              Reach out and let’s make your vision a reality!
            </p>

            <div className="space-y-3 text-xs">
              <a
                href="mailto:kpratik071997@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-violet-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <i className="fas fa-envelope" />
                </span>
                <span>
                  <strong className="block font-medium">
                    kpratik071997@gmail.com
                  </strong>
                  <small className="text-[10px] text-slate-500">Email</small>
                </span>
              </a>
              <a
                href="tel:+919062144984"
                className="flex items-center gap-3 transition-colors hover:text-violet-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <i className="fas fa-phone" />
                </span>
                <span>
                  <strong className="block font-medium">+91 9062144984</strong>
                  <small className="text-[10px] text-slate-500">Phone</small>
                </span>
              </a>
            </div>

            <div className="my-3 border-t border-violet-100" />
            <div className="space-y-3 text-xs">
              <a
                href="https://github.com/kPratik07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-violet-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg text-slate-900">
                  <i className="fab fa-github" />
                </span>
                <span>
                  <strong className="block font-medium">GitHub</strong>
                  <small className="text-[10px] text-slate-500">
                    github.com/kPratik07
                  </small>
                </span>
                <i className="fas fa-arrow-up-right-from-square ml-auto text-violet-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-raj-dev07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-violet-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-600">
                  <i className="fab fa-linkedin" />
                </span>
                <span>
                  <strong className="block font-medium">LinkedIn</strong>
                  <small className="text-[10px] text-slate-500">
                    linkedin.com/in/pratik-raj-dev07
                  </small>
                </span>
                <i className="fas fa-arrow-up-right-from-square ml-auto text-violet-600" />
              </a>
            </div>
            <div className="contact-wave" aria-hidden="true" />
          </div>

          <form
            className="contact-panel flex h-fit self-start flex-col gap-1 rounded-lg bg-white px-6 pb-4 pt-5 shadow-[0_10px_30px_rgba(71,56,130,0.08)] sm:px-7 md:h-full md:self-stretch"
            action="https://formspree.io/f/xvgpkbeo"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-2 text-xl font-bold">
              Send Me Your <span className="text-violet-600">Message</span>
            </h2>
            <div className="mb-2 h-0.5 w-6 bg-violet-600" />
            {[
              { name: "name", placeholder: "Your Name", icon: "fa-user" },
              { name: "email", placeholder: "Your Email", icon: "fa-envelope" },
              { name: "subject", placeholder: "Subject", icon: "fa-tag" },
            ].map((field) => (
              <label
                key={field.name}
                className="flex h-[34px] items-center gap-3 rounded-md border border-violet-100 px-3 text-xs text-slate-500 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
              >
                <i className={`fas ${field.icon} w-3 text-violet-600`} />
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none placeholder:text-slate-500"
                  pattern={
                    field.name === "email"
                      ? "[^\\s@]+@[^\\s@]+\\.[A-Za-z]{2,}"
                      : undefined
                  }
                  aria-invalid={field.name === "email" && Boolean(emailError)}
                  aria-describedby={
                    field.name === "email" && emailError
                      ? "email-error"
                      : undefined
                  }
                  required
                />
              </label>
            ))}
            {emailError && (
              <p
                id="email-error"
                className="text-[11px] text-red-600"
                role="alert"
              >
                {emailError}
              </p>
            )}
            <label className="flex min-h-[70px] items-start gap-3 rounded-md border border-violet-100 px-3 py-2.5 text-xs text-slate-500 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100">
              <i className="fas fa-message mt-0.5 w-3 text-violet-600" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="h-full min-h-[50px] w-full resize-none bg-transparent outline-none placeholder:text-slate-500"
                required
              />
            </label>
            <button
              type="submit"
              className="contact-submit mt-1 flex h-9 w-full shrink-0 appearance-none items-center justify-center gap-2 rounded-md text-xs font-medium text-white transition-opacity hover:opacity-90"
              disabled={!isFormValid}
            >
              <i className="fas fa-paper-plane" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
