export default function PrimaryButton({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      rounded-xl
      bg-rose-500
      px-6
      py-3
      font-semibold
      text-white

      hover:bg-rose-600
      "
    >
      {children}
    </button>
  );
}