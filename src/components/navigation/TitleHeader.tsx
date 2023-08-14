import { Text } from "native-base";

function TitleHeader({ title }: { title: string }) {
  return <Text fontSize="md">{title}</Text>;
}

export default TitleHeader;
