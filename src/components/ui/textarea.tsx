import * as React from "react";
import { useCallback } from "react";
import { cn } from "~/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  debounceMs?: number;
}

const baseStyles = "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none shadow-sm outline-none ring-0";
const focusStyles = "focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0";

const Textarea = React.memo(React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, debounceMs = 100, ...props }, ref) => {
    const [value, setValue] = React.useState(props.defaultValue || props.value || "");
    
    // Debounced onChange handler
    const debouncedOnChange = useCallback(
      (() => {
        let timeout: NodeJS.Timeout;
        return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          clearTimeout(timeout);
          setValue(e.target.value);
          
          timeout = setTimeout(() => {
            onChange?.(e);
          }, debounceMs);
        };
      })(),
      [onChange, debounceMs]
    );

    return (
      <textarea
        className={cn(baseStyles, focusStyles, className)}
        ref={ref}
        onChange={debouncedOnChange}
        value={value}
        {...props}
      />
    );
  }
));

Textarea.displayName = "Textarea";

export { Textarea };
