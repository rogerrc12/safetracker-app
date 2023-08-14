import { Box, Icon, IconButton, Text, useTheme } from "native-base";
import Card from "../common/UI/Card";
import { FontAwesome5, Feather } from "@expo/vector-icons";

function ExtiguisherItem() {
  return (
    <Card cardStyles={{ flexDirection: "row", alignItems: "center" }}>
      <Box bg="green.50" p="2" rounded="md" alignItems="center" justifyContent="center">
        <Icon as={FontAwesome5} name="fire-extinguisher" size="xl" color="primary.500" />
      </Box>
      <Box ml="3">
        <Text fontWeight={600}>DT-001</Text>
        <Text fontSize="xs" color="gray.500">
          15/07/2023
        </Text>
        <Text fontWeight={600} fontSize="xs">
          En servicio de recarga
        </Text>
      </Box>
      <IconButton ml="auto" icon={<Feather name="edit" size={24} color="green" />} />
    </Card>
  );
}

export default ExtiguisherItem;
