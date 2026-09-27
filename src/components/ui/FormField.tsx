import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

/** Accessibility props to spread onto the field's input, select or textarea. */
export interface FieldControlProps {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  /** Shown beside the label for optional fields. */
  optionalLabel?: string;
  error?: string;
  className?: string;
  children: (control: FieldControlProps) => ReactNode;
}

/** Label, control and inline error message, wired together for screen readers. */
export function FormField({ id, label, optionalLabel, error, className, children }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink"
      >
        {label}
        {optionalLabel && <span className="text-xs font-normal text-muted">{optionalLabel}</span>}
      </label>
      <div className="mt-2">
        {children({
          id,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? errorId : undefined,
        })}
      </div>
      {error && (
        <p id={errorId} className="mt-2 flex items-start gap-1.5 text-sm text-danger">
          <CircleAlert aria-hidden="true" className="mt-1 size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
