/** Layth Aero mark: a delta airframe over a horizon line. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 22" fill="none" className={className} aria-hidden="true">
      <path d="M17 1 32 19H2L17 1Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M17 7.5 25.5 19h-17L17 7.5Z" fill="currentColor" opacity="0.28" />
      <path d="M0 21h34" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
    </svg>
  );
}
