import { FlatList, View } from "react-native";
import { ExtinguishersScreenProps } from "./Extinguishers.interfaces";
import Screen from "@src/components/common/utils/Screen";
import ExtiguisherItem from "@src/components/extinguisher/ExtinguisherItem";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";
import AddButton from "@src/components/common/UI/buttons/AddButton";

function Extinguishers({ navigation }: ExtinguishersScreenProps) {
  return (
    <Screen>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={ExtiguisherItem}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
      <AddButton onPress={() => navigation.navigate(EquipmentsScreenNames.ADD_EXTINGUISHER_GENERAL_ASPECTS)} />
    </Screen>
  );
}

export default Extinguishers;
