```javascript
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const stylePDF = async (pdfBuffer, formData) => {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  firstPage.drawText(formData.propertyName, {
    x: 50,
    y: height - 70,
    size: 20,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(formData.type, {
    x: 50,
    y: height - 100,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  // Add more fields as needed

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};
```