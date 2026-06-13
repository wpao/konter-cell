interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        border
        rounded-xl
        px-3
        py-2
      "
    >
      <option value="">Semua Kategori</option>

      <option value="Pulsa Bank">Pulsa Bank</option>

      <option value="Kartu">Kartu</option>

      <option value="Aces">Aces</option>
    </select>
  );
}
