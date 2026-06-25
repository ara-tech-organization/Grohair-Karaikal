import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function CustomSelect({
  value,
  onChange,
  placeholder,
  groups,
  options,
  clearLabel,
  disabled = false,
  className = "",
  panelClassName = "",
  buttonId,
}) {
  const [open, setOpen] = useState(false);
  const generatedId = useId();
  const ref = useRef(null);
  const listboxId = `${buttonId || generatedId}-listbox`;

  const normalizedGroups = groups
    ? groups.map((group) => ({
        label: group.label,
        options: group.options || group.items || [],
      }))
    : options
      ? [{ label: null, options }]
      : [];

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (nextValue) => {
    onChange(nextValue);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        id={buttonId}
        type="button"
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => !disabled && setOpen((current) => !current)}
        className={`input-base flex w-full items-center justify-between gap-2 text-left ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        } ${value ? "text-ink-900" : "text-ink-400"} ${className}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-ink-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          className={`absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-72 overflow-y-auto rounded-2xl bg-white shadow-card ring-1 ring-ink-100 ${panelClassName}`}
        >
          {clearLabel && (
            <button
              type="button"
              onClick={() => handleSelect("")}
              className="flex w-full items-center gap-2 border-b border-ink-50 px-4 py-3 text-left text-sm text-ink-400 hover:bg-ink-50"
            >
              {clearLabel}
            </button>
          )}

          {normalizedGroups.map((group, groupIndex) => (
            <div key={group.label || `group-${groupIndex}`}>
              {group.label && (
                <p className="px-4 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {group.label}
                </p>
              )}
              {group.options.map((option) => {
                const selected = value === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => handleSelect(option)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      selected
                        ? "bg-brand-50 font-medium text-brand-700"
                        : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    <span className="truncate">{option}</span>
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
