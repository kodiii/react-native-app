import React from 'react';
import { PDFDocument, StandardFonts } from 'react-native-pdf-lib';

const PDFGenerator = ({ formData }) => {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const contentCenter = width / 2;

    page.drawText(formData.propertyName, {
      x: contentCenter,
      y: height - 50,
      size: 20,
      font: timesRomanFont,
      color: '#000',
    });

    page.drawText(formData.type, {
      x: contentCenter,
      y: height - 100,
      size: 15,
      font: timesRomanFont,
      color: '#000',
    });

    // Add more fields as needed

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  return (
    <button onClick={generatePDF}>Generate PDF</button>
  );
};

export default PDFGenerator;