import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { portfolio } from "@/data/portfolio";
import {
  buildMailtoUrl,
  isFormspreeConfigured,
  OTHER_SERVICE,
  sendToFormspree,
  validateInquiry,
  type InquiryErrors,
  type InquiryField,
  type InquiryValues,
} from "@/lib/contact";
import { fillTemplate } from "@/lib/text";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "mailto" | "error";
type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const { profile, services, contactForm: copy } = portfolio;
const { fields } = copy;

const FIELD_ORDER: InquiryField[] = ["name", "email", "businessType", "service", "message"];
const EMPTY_VALUES: InquiryValues = {
  name: "",
  email: "",
  businessType: "",
  service: "",
  message: "",
};

function getServiceLabel(value: string): string {
  return services.find((service) => service.id === value)?.title ?? fields.service.otherOption;
}

function composeEmailBody(values: InquiryValues): string {
  return [
    `${fields.name.label}: ${values.name.trim()}`,
    `${fields.email.label}: ${values.email.trim()}`,
    `${fields.businessType.label}: ${values.businessType.trim()}`,
    `${fields.service.label}: ${getServiceLabel(values.service)}`,
    "",
    values.message.trim(),
  ].join("\n");
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<InquiryValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const confirmationRef = useRef<HTMLHeadingElement>(null);

  const fieldId = (field: InquiryField) => `${formId}-${field}`;
  const subject = fillTemplate(copy.emailSubject, { name: values.name.trim() });
  const mailtoUrl = buildMailtoUrl(profile.email, subject, composeEmailBody(values));
  const isSubmitting = status === "submitting";
  const isComplete = status === "success" || status === "mailto";

  useEffect(() => {
    if (isComplete) confirmationRef.current?.focus();
  }, [isComplete]);

  function update(field: InquiryField) {
    return (event: ChangeEvent<FieldElement>) => {
      const next = { ...values, [field]: event.target.value };
      setValues(next);
      // Validate live only after the first submit attempt, so visitors aren't nagged while typing.
      if (hasTriedSubmit) setErrors(validateInquiry(next, copy.errors));
    };
  }

  async function send() {
    setStatus("submitting");
    try {
      await sendToFormspree(profile.formspreeId, {
        name: values.name.trim(),
        email: values.email.trim(),
        businessType: values.businessType.trim(),
        service: getServiceLabel(values.service),
        message: values.message.trim(),
        _subject: subject,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasTriedSubmit(true);

    const found = validateInquiry(values, copy.errors);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    // Only bots fill the hidden field; report success so they don't retry.
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!isFormspreeConfigured(profile.formspreeId)) {
      window.location.href = mailtoUrl;
      setStatus("mailto");
      return;
    }

    void send();
  }

  function reset() {
    setValues(EMPTY_VALUES);
    setErrors({});
    setHasTriedSubmit(false);
    setStatus("idle");
  }

  if (isComplete) {
    const isMailto = status === "mailto";
    const [beforeEmail, afterEmail] = copy.mailtoMessage.split("{email}");

    return (
      <div role="status" className="flex flex-col items-start py-4">
        <span className="grid size-12 place-items-center rounded-full bg-sage/15 text-sage-strong">
          <CircleCheck aria-hidden="true" className="size-6" />
        </span>
        <h3
          ref={confirmationRef}
          tabIndex={-1}
          className="mt-6 text-2xl font-medium text-ink focus:outline-none"
        >
          {isMailto ? copy.mailtoTitle : copy.successTitle}
        </h3>
        <p className="mt-3 text-muted">
          {isMailto ? (
            <>
              {beforeEmail}
              {afterEmail !== undefined && (
                <>
                  <a
                    href={mailtoUrl}
                    className="font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent-strong"
                  >
                    {profile.email}
                  </a>
                  {afterEmail}
                </>
              )}
            </>
          ) : (
            copy.successMessage
          )}
        </p>
        <Button variant="secondary" onClick={reset} className="mt-8">
          {copy.sendAnotherLabel}
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-labelledby={`${formId}-title`}>
      <h3 id={`${formId}-title`} className="text-xl font-medium text-ink">
        {copy.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{copy.requiredHint}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <FormField id={fieldId("name")} label={fields.name.label} error={errors.name}>
          {(control) => (
            <input
              {...control}
              type="text"
              name="name"
              autoComplete="name"
              required
              value={values.name}
              onChange={update("name")}
              placeholder={fields.name.placeholder}
              className="field-control h-12"
            />
          )}
        </FormField>

        <FormField id={fieldId("email")} label={fields.email.label} error={errors.email}>
          {(control) => (
            <input
              {...control}
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={update("email")}
              placeholder={fields.email.placeholder}
              className="field-control h-12"
            />
          )}
        </FormField>

        <FormField
          id={fieldId("businessType")}
          label={fields.businessType.label}
          optionalLabel={copy.optionalLabel}
          error={errors.businessType}
        >
          {(control) => (
            <input
              {...control}
              type="text"
              name="businessType"
              value={values.businessType}
              onChange={update("businessType")}
              placeholder={fields.businessType.placeholder}
              className="field-control h-12"
            />
          )}
        </FormField>

        <FormField id={fieldId("service")} label={fields.service.label} error={errors.service}>
          {(control) => (
            <div className="relative">
              <select
                {...control}
                name="service"
                required
                value={values.service}
                onChange={update("service")}
                className={cn(
                  "field-control h-12 cursor-pointer appearance-none pr-11",
                  !values.service && "text-muted",
                )}
              >
                <option value="" disabled>
                  {fields.service.placeholder}
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
                <option value={OTHER_SERVICE}>{fields.service.otherOption}</option>
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
              />
            </div>
          )}
        </FormField>

        <FormField
          id={fieldId("message")}
          label={fields.message.label}
          error={errors.message}
          className="sm:col-span-2"
        >
          {(control) => (
            <textarea
              {...control}
              name="message"
              required
              rows={5}
              value={values.message}
              onChange={update("message")}
              placeholder={fields.message.placeholder}
              className="field-control min-h-36 resize-y py-3"
            />
          )}
        </FormField>
      </div>

      {/* Honeypot: hidden from people and assistive tech, but bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>{copy.honeypotLabel}</label>
        <input
          id={`${formId}-website`}
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex gap-3 rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm"
        >
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-danger" />
          <div>
            <p className="font-semibold text-ink">{copy.errorTitle}</p>
            <p className="mt-1 text-muted">{copy.errorMessage}</p>
            <a
              href={mailtoUrl}
              className="mt-2 inline-block font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent-strong"
            >
              {copy.errorFallbackLabel}
            </a>
          </div>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="mt-8 w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <LoaderCircle aria-hidden="true" className="size-4 motion-safe:animate-spin" />
            {copy.submittingLabel}
          </>
        ) : (
          <>
            {copy.submitLabel}
            <Send
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </>
        )}
      </Button>
      <p aria-live="polite" className="sr-only">
        {isSubmitting ? copy.submittingLabel : ""}
      </p>
    </form>
  );
}
