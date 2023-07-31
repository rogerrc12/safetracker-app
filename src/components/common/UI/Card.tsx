import { Box } from "native-base";
import { StyleProp, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  cardStyles?: StyleProp<ViewStyle>;
}

function Card({ children, cardStyles }: CardProps) {
  return (
    <Box rounded="lg" p={22} bg="white" shadow="1" style={cardStyles}>
      {children}
    </Box>
  );
}

export default Card;
