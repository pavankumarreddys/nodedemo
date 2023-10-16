// QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState(''); // State to store the text for the QR code

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={handleTextChange}
      />
      {text && <QRCode value={text} />}
    </div>
  );
}

export default QRCodeGenerator;
