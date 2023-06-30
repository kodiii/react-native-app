```javascript
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const generatePDF = async (formData) => {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 24;
  const textLines = [
    `Property Name: ${formData.propertyName}`,
    `Type: ${formData.type}`,
    `Rooms: ${formData.rooms}`,
    `Bathrooms: ${formData.bathrooms}`,
    `Garages: ${formData.garages}`,
    `Area: ${formData.area}`,
    `Other Specifications: ${formData.otherSpecifications}`,
    `Price: ${formData.price}`,
  ];

  let textHeight = height - fontSize * 2;
  const contentStream = pdfDoc.createContentStream(
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight, textLines[0]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize, textLines[1]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 2, textLines[2]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 3, textLines[3]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 4, textLines[4]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 5, textLines[5]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 6, textLines[6]),
    drawText(timesRomanFont, fontSize, rgb(0, 0, 0), width / 2, textHeight - fontSize * 7, textLines[7]),
  );

  page.addContentStreams(pdfDoc.register(contentStream));

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

const drawText = (font, size, color, x, y, text) => {
  return {
    operator: 'BT',
    operands: [
      ['Tf', font.name, size],
      ['Tw', { type: 'number', value: 30 }],
      ['Tc', { type: 'number', value: 0 }],
      ['TL', { type: 'number', value: 0 }],
      ['Tm', { type: 'array', value: [1, 0, 0, 1, x, y] }],
      ['T*', []],
      ['Tj', { type: 'string', value: text }],
      ['ET', []],
    ],
  };
};
```