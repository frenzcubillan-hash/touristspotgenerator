export default function ProgressBar({ step }) {
  const width = (step / 3) * 100;

  return (
    <div className="mb-10">
      <div className="mb-2 flex justify-between text-sm text-gray-500">
        <span>Step {step} of 3</span>
        <span>{Math.round(width)}%</span>
      </div>

      <div className="h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-rose-500 transition-all duration-300"
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
}