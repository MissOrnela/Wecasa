type Props = {
  disabled?: boolean;
  onClick: () => void;
  label?: string;
};

export default function NextButton({
  disabled = false,
  onClick,
  label = "Suivant",
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full bg-green-500 text-white py-2 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}
