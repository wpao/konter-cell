import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  gradient: string;
}

export const SummaryCard = ({ title, value, subtitle, gradient }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-3xl p-5 text-white shadow-lg ${gradient}`}
    >
      <h4 className="text-sm opacity-80">{title}</h4>

      <h2 className="mt-2 text-3xl font-bold">{value}</h2>

      <p className="mt-2 text-sm opacity-80">{subtitle}</p>
    </motion.div>
  );
};
