import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default Provider;
