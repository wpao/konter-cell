import type { Product } from "../types/product";

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onDelete }: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Stok</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>

            <td>
              <button onClick={() => onDelete(product.id!)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
