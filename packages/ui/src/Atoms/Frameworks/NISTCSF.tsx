export function NISTCSF(props: { className?: string }) {
  const { className } = props;

  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-none stroke-txt-primary"
        d="M30,5L5,20l5,30l20,5l20-5l5-30L30,5z"
        strokeWidth="2"
      />
    </svg>
  );
}
