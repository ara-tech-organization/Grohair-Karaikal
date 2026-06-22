import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  AlertCircle,
  ChevronDown,
  Check,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import { clinic } from "../data/site";
import { hairTreatments, skinTreatments } from "../data/services";

const API_URL = "https://adgrohairgloskinkaraikal.com/api/email.php";

const TREATMENT_GROUPS = [
  { label: "Hair Treatments", items: hairTreatments.map((t) => t.title) },
  { label: "Skin Treatments", items: skinTreatments.map((t) => t.title) },
];

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const setTreatment = (val) => {
    setForm((prev) => ({ ...prev, treatment: val }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          treatment: form.treatment,
          date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "2-digit", day: "2-digit" }),
          time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
          source: "Website",
        }),
      });
      const data = await res.json();
      if (data.success) {
        navigate("/thank-you", { state: { type: "contact" } });
      } else {
        setSubmitError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setSubmitError("Unable to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            We'd love to{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              hear from you
            </span>
          </>
        }
        description="Questions about a treatment, pricing, or your first visit? Send us a note — our team responds within one business day."
      />

      <section className="section">
        <div className="container-px mx-auto max-w-7xl space-y-8">

          {/* FORM — full width */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-ink-500">
                  We typically reply within a few hours during clinic hours.
                </p>
              </div>
              <span className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow sm:inline-flex">
                <Send className="h-4 w-4" />
              </span>
            </div>

            <form
              noValidate
              onSubmit={onSubmit}
              className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3"
            >
              <Field
                label="Full name"
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={update("name")}
                error={errors.name}
              />
              <Field
                label="Email"
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={update("email")}
                error={errors.email}
              />
              <Field
                label="Phone"
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 9XXXXXXXXX"
                value={form.phone}
                onChange={update("phone")}
                error={errors.phone}
              />

              {/* TREATMENT DROPDOWN */}
              <div className="sm:col-span-1">
                <label className="label-base mb-2 block">
                  Treatment <span className="text-ink-400 font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <TreatmentDropdown
                  value={form.treatment}
                  onChange={setTreatment}
                />
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="label-base mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your goals or the treatment you're curious about…"
                  value={form.message}
                  onChange={update("message")}
                  className="input-base resize-none"
                />
                {errors.message && <FieldError text={errors.message} />}
              </div>

              <div className="sm:col-span-3 space-y-3 pt-2">
                {submitError && (
                  <p className="inline-flex items-center gap-1.5 text-xs text-brand-700">
                    <AlertCircle className="h-3.5 w-3.5 flex-none" />
                    {submitError}
                  </p>
                )}
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-ink-400">
                    By sending this form, you agree to our privacy practices.
                  </p>
                  <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? "Sending…" : "Send Message"}
                    {!submitting && <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* INFO + MAP row */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* CLINIC INFO */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-100"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-100/50 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-50/80 blur-2xl" />

              <div className="relative px-6 py-7 sm:px-8">
                <span className="eyebrow">Visit Us</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink-900">
                  {clinic.shortName}
                </h3>
                <p className="text-sm text-ink-500">{clinic.city}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="group flex flex-col gap-2 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100 transition-all hover:bg-brand-50 hover:ring-brand-100"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100 transition-colors group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">Phone</p>
                      <p className="mt-0.5 text-xs font-semibold text-ink-800">{clinic.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="group flex flex-col gap-2 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100 transition-all hover:bg-brand-50 hover:ring-brand-100"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100 transition-colors group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">Email</p>
                      <p className="mt-0.5 text-xs font-semibold text-ink-800 break-all">{clinic.email}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">Address</p>
                    <p className="mt-0.5 text-xs font-medium leading-relaxed text-ink-700">{clinic.address}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100">
                      <Clock className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">Working Hours</p>
                  </div>
                  <div className="mt-3 divide-y divide-ink-100">
                    {clinic.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <span className="font-medium text-ink-800">{h.day}</span>
                        <span className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="mr-1 text-xs font-medium text-ink-400">Follow us</span>
                  {clinic.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-50 text-ink-600 ring-1 ring-ink-200 transition-all duration-300 hover:bg-brand-gradient hover:text-white hover:ring-transparent"
                    >
                      <SocialIcon name={s.label} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-card ring-1 ring-ink-100"
            >
              <div
                className="relative overflow-hidden rounded-2xl bg-ink-50"
                style={{ minHeight: "320px", height: "calc(100% - 60px)" }}
              >
                <iframe
                  title={`${clinic.shortName} ${clinic.city} — location map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${clinic.shortName} ${clinic.city}, ${clinic.address}`
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              <div className="flex flex-col items-start justify-between gap-3 px-3 pb-2 pt-3 sm:flex-row sm:items-center">
                <div className="flex items-start gap-2.5 text-xs text-ink-600">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <div className="leading-snug">
                    <div className="font-semibold text-ink-900">
                      {clinic.shortName} — {clinic.city}
                    </div>
                    <div className="text-ink-500">{clinic.address}</div>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${clinic.shortName} ${clinic.city}, ${clinic.address}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-none items-center gap-1 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-ink-100 transition-colors hover:bg-brand-50 hover:ring-brand-100"
                >
                  Get directions
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Treatment Dropdown ─── */
function TreatmentDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`input-base flex w-full items-center justify-between gap-2 text-left ${
          value ? "text-ink-900" : "text-ink-400"
        }`}
      >
        <span className="truncate">{value || "Select a treatment…"}</span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-ink-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-72 overflow-y-auto rounded-2xl bg-white shadow-card ring-1 ring-ink-100">
          {/* clear option */}
          <button
            type="button"
            onClick={() => { onChange(""); setOpen(false); }}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-ink-400 hover:bg-ink-50 border-b border-ink-50"
          >
            — No preference
          </button>

          {TREATMENT_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="px-4 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                {group.label}
              </p>
              {group.items.map((item) => {
                const selected = value === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => { onChange(item); setOpen(false); }}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      selected
                        ? "bg-brand-50 text-brand-700 font-medium"
                        : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    {item}
                    {selected && <Check className="h-3.5 w-3.5 flex-none text-brand-600" />}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Field helpers ─── */
function Field({ label, id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="label-base mb-2 block">
        {label}
      </label>
      <input id={id} {...props} className="input-base" />
      {error && <FieldError text={error} />}
    </div>
  );
}

function FieldError({ text }) {
  return (
    <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-700">
      <AlertCircle className="h-3 w-3" />
      {text}
    </p>
  );
}
