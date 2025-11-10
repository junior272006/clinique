
import { AppShell } from '@mantine/core';
import Header from './Header';
import Landing from './Landing';

export default function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding={0}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      
      <AppShell.Main>
        <Landing />
      </AppShell.Main>
    </AppShell>
  );
}