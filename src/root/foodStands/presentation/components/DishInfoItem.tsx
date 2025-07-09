import { StyleSheet , Text} from "react-native";
import { ThemedView } from "../../../shared/components/ui/ThemedView";

interface DishInfoItemProps {
  dishName: string;
  quantity: number;
  level: 1 | 2;
}

export const DishInfoItem = ({ dishName, quantity, level }: DishInfoItemProps) => {
  return (
    <ThemedView level={level} style={styles.amount}>
      <Text>{dishName}: </Text>
      <Text>{quantity}</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 2,
    borderRadius: 8,
  },
});