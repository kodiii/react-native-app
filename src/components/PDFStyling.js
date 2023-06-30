import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { applyPDFStyling } from '../utils/pdfStyling';

const PDFStyling = ({ navigation }) => {
  const [fontSize, setFontSize] = useState(12);
  const [fontColor, setFontColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleFontSizeChange = (value) => setFontSize(value);
  const handleFontColorChange = (value) => setFontColor(value);
  const handleBackgroundColorChange = (value) => setBackgroundColor(value);

  const handleApplyStyling = () => {
    applyPDFStyling(fontSize, fontColor, backgroundColor);
    navigation.navigate('HomeScreen');
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
    </View>
  );
};

export default PDFStyling;