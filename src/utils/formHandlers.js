```javascript
import { useState } from 'react';

export const useFormHandlers = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    type: '',
    rooms: '',
    bathrooms: '',
    garages: '',
    area: '',
    otherSpecifications: '',
    price: '',
    photos: [],
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFileUpload = (files) => {
    setFormData({
      ...formData,
      photos: files,
    });
  };

  return {
    formData,
    handleInputChange,
    handleFileUpload,
  };
};
```