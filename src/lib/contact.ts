import type { ContactFormCopy } from "@/data/types";
import { fillTemplate } from "./text";

export interface InquiryValues {
  name: string;
  email: string;
  businessType: string;
  /** A service id, or OTHER_SERVICE when the visitor isn't sure yet. */
  service: string;
  message: string;
}

export type InquiryField = keyof InquiryValues;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

export const OTHER_SERVICE = "other";
export const MESSAGE_MIN_LENGTH = 20;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(
  values: InquiryValues,
  messages: ContactFormCopy["errors"],
): InquiryErrors {
  const errors: InquiryErrors = {};
  const email = values.email.trim();
  const message = values.message.trim();

  if (!values.name.trim()) errors.name = messages.nameRequired;

  if (!email) errors.email = messages.emailRequired;
  else if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid;

  if (!values.service) errors.service = messages.serviceRequired;

  if (!message) errors.message = messages.messageRequired;
  else if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = fillTemplate(messages.messageTooShort, { min: MESSAGE_MIN_LENGTH });
  }

  return errors;
}

/** False while portfolio.ts still holds the "YOUR_FORM_ID" placeholder, so the form uses email instead. */
export function isFormspreeConfigured(formId: string): boolean {
  const id = formId.trim();
  return id !== "" && id !== "YOUR_FORM_ID";
}

export async function sendToFormspree(
  formId: string,
  payload: Record<string, string>,
): Promise<void> {
  const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId.trim())}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Formspree request failed with status ${response.status}`);
  }
}

export function buildMailtoUrl(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
