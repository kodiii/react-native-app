```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { pdfStyling } from '../utils/pdfStyling';
import PrintButton from '../components/PrintButton';

const PDFStylingScreen = () => {
  const [fontSize, setFontSize] = useState(12);
  const [fontColor, setFontColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleFontSizeChange = (value) => setFontSize(value);
  const handleFontColorChange = (value) => setFontColor(value);
  const handleBackgroundColorChange = (value) => setBackgroundColor(value);

  const handleApplyStyling = () => {
    pdfStyling(fontSize, fontColor, backgroundColor);
  };

  return (
    <View>
      <Text>PDF Styling</Text>
      <TextInput
        placeholder="Font Size"
        value={fontSize}
        onChangeText={handleFontSizeChange}
      />
      <TextInput
        placeholder="Font Color"
        value={fontColor}
        onChangeText={handleFontColorChange}
      />
      <TextInput
        placeholder="Background Color"
        value={backgroundColor}
        onChangeText={handleBackgroundColorChange}
      />
      <Button title="Apply Styling" onPress={handleApplyStyling} />
      <PrintButton />
    </View>
  );
};

export default PDFStylingScreen;
```