import { ShoppingBag } from "lucide-react";

interface Props {
  invoice: string;
  date: string;
  total: number;
}

export const TransactionItem = ({ invoice, date, total }: Props) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <ShoppingBag size={20} />
        </div>

        <div>
          <h4 className="font-medium">{invoice}</h4>

          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <div className="text-right">
        <h4 className="font-semibold">Rp {total.toLocaleString("id-ID")}</h4>

        <span className="text-green-600 text-sm">CASH</span>
      </div>
    </div>
  );
};
