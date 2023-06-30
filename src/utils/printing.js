```javascript
import React from 'react';
import { Platform } from 'react-native';
import RNPrint from 'react-native-print';

export const printPDF = async (filePath) => {
  if (Platform.OS === 'ios') {
    await RNPrint.print({
      filePath,
      isLandscape: true,
    });
  } else {
    await RNPrint.print({
      filePath,
      isLandscape: true,
      printerUrl: 'YOUR_PRINTER_URL',
      jobName: 'Real Estate Property',
    });
  }
};
```