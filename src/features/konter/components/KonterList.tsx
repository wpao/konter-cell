// import type { Konter } from "../types/konter";

// interface Props {
//   data: Konter[];
// }

// const KonterList = ({ data }: Props) => {
//   return (
//     <>
//       <h1>
//         total :{" "}
//         {data
//           .reduce((sum, item) => sum + item.harga, 0)
//           .toLocaleString("id-ID")}{" "}
//         |{" "}
//         {data
//           .reduce((sum, item) => sum + item.admin, 0)
//           .toLocaleString("id-ID")}
//       </h1>
//       <table className="w-full border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th>Nomor</th>
//             <th>Nama</th>
//             <th>Harga</th>
//             <th>Admin</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id} className="border-t">
//               <td>{item.nomor}</td>

//               <td>{item.nama}</td>

//               <td>{item.harga.toLocaleString("id-ID")}</td>

//               <td>{item.admin.toLocaleString("id-ID")}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default KonterList;

// =============
import type { Konter } from "../types/konter";

interface Props {
  data: Konter[];
  onEdit: (item: Konter) => void;
}

const KonterList = ({ data, onEdit }: Props) => {
  return (
    <>
      <h1>
        total :
        {data
          .reduce((sum, item) => sum + item.harga, 0)
          .toLocaleString("id-ID")}
        {" | "}
        {data
          .reduce((sum, item) => sum + item.admin, 0)
          .toLocaleString("id-ID")}
      </h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Admin</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onEdit(item)}
              className="cursor-pointer border-t hover:bg-blue-50"
            >
              <td>{item.nomor}</td>
              <td>{item.nama}</td>
              <td>{item.harga.toLocaleString("id-ID")}</td>
              <td>{item.admin.toLocaleString("id-ID")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default KonterList;
