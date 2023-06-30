```javascript
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { handleInputChange, handleSubmit } from '../utils/formHandlers';
import TextInputField from './TextInputField';
import NumberInputField from './NumberInputField';
import TextAreaField from './TextAreaField';
import FileUploadField from './FileUploadField';
import SubmitButton from './SubmitButton';

const Form = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    rooms: '',
    bathrooms: '',
    garages: '',
    area: '',
    otherSpecifications: '',
    price: '',
    photos: [],
  });

  return (
    <View>
      <TextInputField
        label="Property Name"
        value={formData.propertyName}
        onChange={(value) => handleInputChange('propertyName', value, setFormData)}
      />
      <TextInputField
        label="Property Type"
        value={formData.propertyType}
        onChange={(value) => handleInputChange('propertyType', value, setFormData)}
      />
      <NumberInputField
        label="Rooms"
        value={formData.rooms}
        onChange={(value) => handleInputChange('rooms', value, setFormData)}
      />
      <NumberInputField
        label="Bathrooms"
        value={formData.bathrooms}
        onChange={(value) => handleInputChange('bathrooms', value, setFormData)}
      />
      <NumberInputField
        label="Garages"
        value={formData.garages}
        onChange={(value) => handleInputChange('garages', value, setFormData)}
      />
      <NumberInputField
        label="Area"
        value={formData.area}
        onChange={(value) => handleInputChange('area', value, setFormData)}
      />
      <TextAreaField
        label="Other Specifications"
        value={formData.otherSpecifications}
        onChange={(value) => handleInputChange('otherSpecifications', value, setFormData)}
      />
      <NumberInputField
        label="Price"
        value={formData.price}
        onChange={(value) => handleInputChange('price', value, setFormData)}
      />
      <FileUploadField
        label="Photos"
        value={formData.photos}
        onChange={(value) => handleInputChange('photos', value, setFormData)}
      />
      <SubmitButton
        onSubmit={() => handleSubmit(formData)}
      />
    </View>
  );
};

export default Form;
```