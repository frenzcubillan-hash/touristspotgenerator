export default function StepCard({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-6
      text-left
      shadow-sm
      transition

      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      {children}
    </button>
  );
}