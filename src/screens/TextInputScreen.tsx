import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  type FormField = typeof form;

  type Fields = keyof FormField;

  const onChange = (field: Fields, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  console.log(setForm);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInput" />
      <View>
        <Text>Name</Text>
      </View>
      <TextInput
        style={textStyle.input}
        placeholder="Your name"
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={value => onChange('name', value)}
      />
      <View>
        <Text>Email</Text>
      </View>
      <TextInput
        style={textStyle.input}
        placeholder="Your email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={value => onChange('email', value)}
      />
      <View>
        <Text>Phone number</Text>
      </View>
      <TextInput
        style={textStyle.input}
        placeholder="Your phone"
        keyboardType="phone-pad"
        onChangeText={value => onChange('phone', value)}
      />
      <HeaderTitle title={JSON.stringify(form, null, 2)} />
    </View>
  );
};

const textStyle = StyleSheet.create({
  input: {
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'grey',
    marginBottom: 15,
  },
});
