import { useRef } from "react";
import { CalendarDays } from "lucide-react";

export default function DateInput({ id, value, onChange, min, className = "" }) {
  const inputRef = useRef(null);

  const openPicker = () => {
    const input = inputRef.current;
    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
    } else {
      input.focus();
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type="date"
        min={min}
        value={value}
        onChange={onChange}
        onClick={openPicker}
        className={`input-base date-input pr-12 ${className}`}
      />
      <button
        type="button"
        onClick={openPicker}
        aria-label="Open calendar"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 transition-colors hover:text-brand-600"
      >
        <CalendarDays className="h-4 w-4" />
      </button>
    </div>
  );
}
