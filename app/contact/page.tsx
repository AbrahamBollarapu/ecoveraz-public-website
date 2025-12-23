"use client";

import * as React from "react";
import { FormNotice } from "@/components/forms/FormNotice";

type FormState = "idle" | "submitting" | "success" | "error";

const GENERAL_ENDPOINT = "https://formspree.io/f/xnjaleel";
const EVALUATION_ENDPOINT = "https://formspree.io/f/mjgbjnnl";

async function submitForm(
  endpoint: string,
  data: Record<string, string>
): Promise<boolean> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.ok;
}

export default function ContactPage() {
  const [generalState, setGeneralState] = React.useState<FormState>("idle");
  const [evaluationState, setEvaluationState] =
    React.useState<FormState>("idle");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    endpoint: string,
    setState: (s: FormState) => void
  ) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check (bot trap)
    if (formData.get("_gotcha")) {
      setState("error");
      return;
    }

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const ok = await submitForm(endpoint, payload);
      setState(ok ? "success" : "error");
      if (ok) form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      {/* ===================== */}
      {/* General / Governance */}
      {/* ===================== */}
      <section id="general">
        <h1 className="text-xl font-semibold text-text-100">
          General / Governance Inquiry
        </h1>

        <p className="mt-2 text-sm text-text-400">
          For governance, regulatory, partnership, or general platform inquiries.
        </p>

        <FormNotice />

        {generalState === "success" ? (
          <p className="mt-6 text-sm text-green-400">
            Submission received. We will review and respond if appropriate.
          </p>
        ) : generalState === "error" ? (
          <p className="mt-6 text-sm text-yellow-400">
            We were unable to accept this submission at the moment.
            <br />
            Please email <strong>contact@ecoveraz.com</strong> with the subject:
            <br />
            <em>“EcoVeraZ — Contact Form Fallback”</em>
          </p>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e, GENERAL_ENDPOINT, setGeneralState)}
            className="mt-6 space-y-4"
          >
            <input type="text" name="_gotcha" className="hidden" />

            <input
              required
              name="name"
              placeholder="Name"
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <textarea
              required
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <button
              type="submit"
              disabled={generalState === "submitting"}
              className="mt-2 px-4 py-2 bg-text-100 text-bg-900 text-sm disabled:opacity-50"
            >
              {generalState === "submitting" ? "Submitting…" : "Submit"}
            </button>
          </form>
        )}
      </section>

      {/* ===================== */}
      {/* Evaluation / Review */}
      {/* ===================== */}
      <section id="evaluation">
        <h2 className="text-xl font-semibold text-text-100">
          Evaluation / Platform Review
        </h2>

        <p className="mt-2 text-sm text-text-400">
          For structured evaluations, pilot discussions, or technical reviews.
        </p>

        <FormNotice />

        {evaluationState === "success" ? (
          <p className="mt-6 text-sm text-green-400">
            Submission received. We will review and respond if appropriate.
          </p>
        ) : evaluationState === "error" ? (
          <p className="mt-6 text-sm text-yellow-400">
            We were unable to accept this submission at the moment.
            <br />
            Please email <strong>contact@ecoveraz.com</strong> with the subject:
            <br />
            <em>“EcoVeraZ — Contact Form Fallback”</em>
          </p>
        ) : (
          <form
            onSubmit={(e) =>
              handleSubmit(e, EVALUATION_ENDPOINT, setEvaluationState)
            }
            className="mt-6 space-y-4"
          >
            <input type="text" name="_gotcha" className="hidden" />

            <input
              required
              name="name"
              placeholder="Name"
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <textarea
              required
              name="context"
              placeholder="Evaluation context"
              rows={4}
              className="w-full bg-bg-800 border border-border-700 p-2 text-sm"
            />

            <button
              type="submit"
              disabled={evaluationState === "submitting"}
              className="mt-2 px-4 py-2 bg-text-100 text-bg-900 text-sm disabled:opacity-50"
            >
              {evaluationState === "submitting" ? "Submitting…" : "Submit"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
