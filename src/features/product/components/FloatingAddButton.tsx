import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

export default function FloatingAddButton({ onClick }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="bottom-6 right-6 w-14 h-14  bg-blue-600 text-white
        shadow-xl
        flex
        items-center
        justify-center
      "
    >
      <Plus size={28} />
    </motion.button>
  );
}
