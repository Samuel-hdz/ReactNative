
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Mi Cuenta" }} />
    </Stack>
  );
};

export default Layout;
