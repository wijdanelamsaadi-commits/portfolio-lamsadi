import { ArrowRight, FileText, Mail, MapPin, MessageCircle, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1];
const formEndpoint = "https://formspree.io/f/mdeelpyj";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values, messages) {
  const nextErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) nextErrors.name = messages.name;
  if (!values.email.trim()) {
    nextErrors.email = messages.emailRequired;
  } else if (!emailPattern.test(values.email.trim())) {
    nextErrors.email = messages.emailInvalid;
  }
  if (!values.subject) nextErrors.subject = messages.subject;
  if (!values.message.trim()) nextErrors.message = messages.message;

  return nextErrors;
}

export default function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const nextErrors = validate(values, t.contact.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject,
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree returned ${response.status}`);
      }

      setValues(initialValues);
      setErrors({});
      setStatus({ type: "success", message: t.contact.statusSuccess });
    } catch {
      setStatus({ type: "error", message: t.contact.statusError });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { label: t.contact.email, value: "wijdanelamsaadi@gmail.com", href: "mailto:wijdanelamsaadi@gmail.com", icon: Mail },
    { label: t.contact.location, value: "El Jadida, Maroc", icon: MapPin },
    { label: t.contact.linkedin, value: "linkedin.com/in/lamsadi-wijdane", href: "https://www.linkedin.com/in/lamsadi-wijdane-a236bb257", icon: FaLinkedinIn },
    { label: t.contact.github, value: "github.com/wijdanelamsaadi-commits", href: "https://github.com/wijdanelamsaadi-commits", icon: FaGithub },
  ];

  return (
    <main className="contact-page" id="contact">
      <div className="contact-background" aria-hidden="true">
        <span className="contact-orbit contact-orbit-large" />
        <span className="contact-orbit contact-orbit-small" />
        <span className="contact-dots contact-dots-top" />
        <span className="contact-dots contact-dots-bottom" />
        <span className="contact-leaf-line" />
      </div>
      <SiteHeader />

      <section className="contact-shell" aria-labelledby="contact-title">
        <motion.div className="contact-intro" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, ease }}>
          <p className="contact-eyebrow">{t.contact.eyebrow}</p>
          <h1 id="contact-title" className="contact-title">
            {t.contact.titleFirst}
            <span>{t.contact.titleSecond}</span>
          </h1>
          <p className="contact-description">{t.contact.description}</p>

          <div className="contact-details" aria-label={t.contact.infoAria}>
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="contact-info-icon">
                    <Icon size={25} aria-hidden="true" />
                  </span>
                  <span className="contact-info-copy">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </span>
                </>
              );

              if (!href) {
                return (
                  <div className="contact-info-item" key={label}>
                    {content}
                  </div>
                );
              }

              return (
                <a className="contact-info-item" href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {content}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form className="contact-form-card" onSubmit={handleSubmit} noValidate initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12, ease }}>
          <div className="contact-form-header">
            <span className="contact-form-icon">
              <Send size={31} aria-hidden="true" />
            </span>
            <div>
              <h2>{t.contact.formTitle}</h2>
              <p>{t.contact.formSubtitle}</p>
            </div>
          </div>

          <label className="contact-field">
            <span>{t.contact.name}</span>
            <span className={`contact-input-shell${errors.name ? " has-error" : ""}`}>
              <User size={21} aria-hidden="true" />
              <input name="name" value={values.name} onChange={updateValue} placeholder={t.contact.namePlaceholder} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
            </span>
            {errors.name ? (
              <small className="contact-error" id="contact-name-error">
                {errors.name}
              </small>
            ) : null}
          </label>

          <label className="contact-field">
            <span>Email</span>
            <span className={`contact-input-shell${errors.email ? " has-error" : ""}`}>
              <Mail size={21} aria-hidden="true" />
              <input name="email" type="email" value={values.email} onChange={updateValue} placeholder={t.contact.emailPlaceholder} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
            </span>
            {errors.email ? (
              <small className="contact-error" id="contact-email-error">
                {errors.email}
              </small>
            ) : null}
          </label>

          <label className="contact-field">
            <span>{t.contact.subject}</span>
            <span className={`contact-input-shell contact-select-shell${errors.subject ? " has-error" : ""}`}>
              <MessageCircle size={21} aria-hidden="true" />
              <select name="subject" value={values.subject} onChange={updateValue} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined}>
                <option value="">{t.contact.subjectPlaceholder}</option>
                {t.contact.subjects.map((subject) => (
                  <option value={subject} key={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </span>
            {errors.subject ? (
              <small className="contact-error" id="contact-subject-error">
                {errors.subject}
              </small>
            ) : null}
          </label>

          <label className="contact-field">
            <span>{t.contact.message}</span>
            <span className={`contact-input-shell contact-textarea-shell${errors.message ? " has-error" : ""}`}>
              <FileText size={21} aria-hidden="true" />
              <textarea name="message" value={values.message} onChange={updateValue} placeholder={t.contact.messagePlaceholder} rows="5" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
            </span>
            {errors.message ? (
              <small className="contact-error" id="contact-message-error">
                {errors.message}
              </small>
            ) : null}
          </label>

          {status ? (
            <p className={`contact-status ${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">
              {status.message}
            </p>
          ) : null}

          <button className="contact-submit" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            <span>{isSubmitting ? t.contact.submitting : t.contact.submit}</span>
            <ArrowRight size={25} aria-hidden="true" />
          </button>
        </motion.form>
      </section>

      <SideNavigation activeSection="contact" />
    </main>
  );
}
