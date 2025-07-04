import React, { forwardRef, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

type Props = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  accessoryLeft?: React.ReactNode;
};

export const CustomInput3 = forwardRef<TextInput, Props>(({
  label,
  error,
  containerStyle,
  inputStyle,
  accessoryLeft,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          focused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        {accessoryLeft && (
          <View style={styles.iconContainer}>
            {accessoryLeft}
          </View>
        )}
        <TextInput
          ref={ref}
          style={[styles.input, inputStyle]}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          placeholderTextColor="#aaa"
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: '#ccc',
    // borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  iconContainer: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  focused: {
    borderColor: '#3366FF',
  },
  errorBorder: {
    borderColor: '#FF3D71',
  },
  errorText: {
    marginTop: 4,
    color: '#FF3D71',
    fontSize: 12,
  },
});
