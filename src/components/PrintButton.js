import React from 'react';
import { Button } from 'react-native';
import { usePdf } from '../utils/printing';

const PrintButton = ({ pdfData }) => {
  const { printPdf } = usePdf();

  const handlePrint = () => {
    printPdf(pdfData);
  };

  return (
    <Button title="Print PDF" onPress={handlePrint} />
  );
};

export default PrintButton;