/**
 * Layth mark: a mane-less lion face reduced to eyes, nose and mouth.
 * Hard mirrored geometry — a predator, not a heraldic crest.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 38" fill="none" className={className} aria-hidden="true">
      {/* eyes: blades slanted down toward the muzzle */}
      <path d="M6 12 17 15.5 14.5 18.5 5.5 15.5Z" fill="currentColor" />
      <path d="M38 12 27 15.5 29.5 18.5 38.5 15.5Z" fill="currentColor" />
      {/* nose bridge */}
      <path d="M22 8.5 24.6 22H19.4L22 8.5Z" fill="currentColor" />
      {/* nose */}
      <path d="M16.4 24.2H27.6L22 30 16.4 24.2Z" fill="currentColor" />
      {/* philtrum + snarl */}
      <path
        d="M22 30v3.2M13.4 33 22 35.6 30.6 33"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
