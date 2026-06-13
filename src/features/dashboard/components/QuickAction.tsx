interface Props {
  title: string;
  icon: React.ReactNode;
}

export const QuickAction = ({ title, icon }: Props) => {
  return (
    <button className="flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
        {icon}
      </div>

      <span className="text-sm">{title}</span>
    </button>
  );
};
