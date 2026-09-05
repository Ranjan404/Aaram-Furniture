"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Enquiry helper.
 *
 * There is no backend on this site, so nothing is "submitted" and no fake
 * success state is shown. The form composes what the visitor typed into a
 * WhatsApp message and opens the chat with it pre-filled, which is a real,
 * working hand-off rather than a form that silently goes nowhere.
 *
 * TO ADD A SERVER-SIDE SUBMISSION LATER
 * -------------------------------------
 * Everything needed is already collected in `values`. Add a route handler at
 * `src/app/api/enquiry/route.ts`, POST `values` to it from `handleSubmit`, and
 * keep the WhatsApp hand-off as the fallback path.
 */

const interests = [
  "Sofa",
  "Bed",
  "Sofa + bed",
  "Dining",
  "Wardrobe / storage",
  "TV unit",
  "Custom furniture",
  "Something else",
];

interface EnquiryValues {
  name: string;
  interest: string;
  details: string;
}

const emptyValues: EnquiryValues = { name: "", interest: interests[0], details: "" };

function composeMessage({ name, interest, details }: EnquiryValues) {
  const lines = [
    `Hi ${siteConfig.name},`,
    name ? `My name is ${name}.` : null,
    `I'm looking for: ${interest}.`,
    details ? `Details: ${details}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(emptyValues);

  const update = <K extends keyof EnquiryValues>(key: K, value: EnquiryValues[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const fieldClass =
    "w-full min-h-12 rounded-xl border border-line-strong bg-white px-4 text-sm text-ink " +
    "placeholder:text-stone-light transition-colors duration-300 focus:border-ink focus:outline-none";

  return (
    <form
      className="rounded-(--radius-card) border border-line bg-white p-6 sm:p-8"
      onSubmit={(event) => {
        // Open WhatsApp with the composed message instead of posting anywhere.
        event.preventDefault();
        window.open(whatsappHref(composeMessage(values)), "_blank", "noopener,noreferrer");
      }}
    >
      <h3 className="text-2xl">Tell us what you need</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone">
        Fill this in and it opens WhatsApp with your enquiry ready to send. Nothing is stored on
        this website.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Priya"
            className={fieldClass}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="enquiry-interest" className="mb-2 block text-sm font-semibold text-ink">
            What are you looking for?
          </label>
          <select
            id="enquiry-interest"
            name="interest"
            className={fieldClass}
            value={values.interest}
            onChange={(event) => update("interest", event.target.value)}
          >
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="enquiry-details" className="mb-2 block text-sm font-semibold text-ink">
            Room size, style or anything else
          </label>
          <textarea
            id="enquiry-details"
            name="details"
            rows={4}
            placeholder="e.g. L-shape sofa for a 12 x 15 ft living room, fabric, light colour"
            className={`${fieldClass} min-h-28 resize-y py-3 leading-relaxed`}
            value={values.details}
            onChange={(event) => update("details", event.target.value)}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="whatsapp"
        size="lg"
        className="mt-6 w-full"
        icon={<WhatsAppIcon className="size-[1.15rem]" />}
      >
        Continue on WhatsApp
      </Button>

      <p className="mt-3 text-center text-xs text-stone-light">
        Opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
