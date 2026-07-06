import { QRCodeCanvas } from "qrcode.react";

export default function QRCodePage() {
  return (
    <div>
      <h2>Scan QR</h2>

      <QRCodeCanvas
        value="https://doctorially-exegetic-kensley.ngrok-free.dev/pelanggan"
        size={250}
      />
    </div>
  );
}
