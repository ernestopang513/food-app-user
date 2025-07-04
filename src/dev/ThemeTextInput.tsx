import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useRef, useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label?: string;
  error?: string;
}

const ThemedTextInput = ({ icon, label, error, ...rest }: Props) => {
  const theme = useThemeStore(state => state.theme)
  const primaryColor = theme.primary['500']
  const textColor = theme.textBasicColor

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={{ backgroundColor: 'transparent' }}>
      {label && <Text style={[styles.label, {color: theme.inputLabelColor}]} >{label}</Text>}
      <View
        style={[{
          ...styles.border,
          borderColor: isActive ? primaryColor : theme.inputBorderColor,
        },
        error && styles.errorBorder
        ]}
        onTouchStart={() => {
          inputRef.current?.focus()
        }}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={primaryColor}
            style={{ marginHorizontal: 10 }}
          />
        )}
        <TextInput
          ref={inputRef}
          placeholderTextColor = {theme.inputPlaceholderColor} 
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          style={{
            color: textColor,
            marginRight: 10,
            flex: 1,
            fontSize: 16,
          }}
          {...rest}
        />
      </View>
      {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
      {error && <Text style={[styles.errorText, {color: theme.danger['900']}]}>{error}</Text>}
    </View>
  );
};
export default ThemedTextInput;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // fontSize: 16
  },
  label: {
    marginBottom: 4,
    fontSize: 14
  },
  errorBorder: {
    borderColor: '#FF3D71'//danger 900
  },
  errorText: {
    // marginTop: 4,
    // marginLeft: 8,
    fontSize: 12,
  }
});