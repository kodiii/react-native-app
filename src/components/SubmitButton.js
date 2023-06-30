```javascript
import React from 'react';
import { Button } from 'react-native';
import { generatePDF } from '../utils/pdfGeneration';

const SubmitButton = ({ formData }) => {
  const handlePress = () => {
    generatePDF(formData);
  };

  return (
    <Button title="Submit" onPress={handlePress} />
  );
};

export default SubmitButton;
```