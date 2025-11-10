import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HospitalLogo from './HospitalLogo';
import classes from './Header.module.css';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <HospitalLogo size={48} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              <Group gap="xs">
                <IconHome size={18} />
                Accueil
              </Group>
            </a>
            <a href="#" className={classes.link}>
              <Group gap="xs">
                <IconUser size={18} />
                Profils
              </Group>
            </a>
            <a href="#" className={classes.link}>
              <Group gap="xs">
                <IconMessage size={18} />
                Contacts
              </Group>
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Se connecter</Button>
            <Button variant="gradient" gradient={{ from: 'clinicBlue.5', to: 'clinicGreen.5', deg: 120 }}>
              Créer un compte
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            <Group gap="xs">
              <IconHome size={18} />
              Accueil
            </Group>
          </a>
          <a href="#" className={classes.link}>
            <Group gap="xs">
              <IconUser size={18} />
              Profils
            </Group>
          </a>
          <a href="#" className={classes.link}>
            <Group gap="xs">
              <IconMessage size={18} />
              Contacts
            </Group>
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Se connecter</Button>
            <Button variant="gradient" gradient={{ from: 'clinicBlue.5', to: 'clinicGreen.5', deg: 120 }}>
              Créer un compte
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}