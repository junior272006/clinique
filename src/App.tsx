import { useDisclosure } from '@mantine/hooks';
import { AppShell,Text } from '@mantine/core';
import Header from './Header';
export default function App() {
  const [opened] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
     <Header/>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>Layout used in most cases – Navbar and Header with fixed position</Text>
      </AppShell.Main>
    </AppShell>
  );
}