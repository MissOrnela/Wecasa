export function AppointmentInput({
  value,
  min,
  onChange,
}: {
  value: string;
  min: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="datetime-local"
      className="border p-2 rounded w-full"
      min={min}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
