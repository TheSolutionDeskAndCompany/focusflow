export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-8 w-auto ${className}`} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5ZM20 32C13.373 32 8 26.627 8 20C8 13.373 13.373 8 20 8C26.627 8 32 13.373 32 20C32 26.627 26.627 32 20 32Z"/>
      <path d="M20 12V20H26" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
