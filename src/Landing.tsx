import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Badge,
  Card,
  Group,
  Stack,
  ThemeIcon,
  SimpleGrid,
  Box,
} from '@mantine/core';
import {
  IconCalendar,
  IconUser,
  IconHeartbeat,
  IconUsers,
  IconClock,
  IconShieldCheck,
  IconInfoCircle,
} from '@tabler/icons-react';

export default function Landing() {
  return (
    <Box style={{ 
      background: 'linear-gradient(135deg, #f8fafa 0%, #e6f1fb 100%)', 
      minHeight: '100vh', 
      width: '100%',
      paddingTop: '60px'
    }}>
      <Container size="xl" py={0} style={{ maxWidth: '100%', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Grid gutter="xl" align="flex-start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Badge
                leftSection={<IconShieldCheck size={16} />}
                size="lg"
                variant="light"
                color="clinicGreen"
                radius="md"
              >
                Plateforme Médicale Certifiée
              </Badge>

              <Stack gap="md">
                <Title
                  order={1}
                  style={{
                    fontSize: '3rem',
                    lineHeight: 1.2,
                  }}
                >
                  Votre Santé,{' '}
                  <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: 'clinicBlue.5', to: 'clinicGreen.5', deg: 120 }}
                    inherit
                  >
                    Notre Priorité
                  </Text>
                </Title>

                <Text size="lg" c="dimmed" style={{ maxWidth: '500px' }}>
                  Plateforme médicale moderne pour la gestion de vos consultations,
                  rendez-vous et suivi médical en toute simplicité.
                </Text>
              </Stack>

              <Group gap="md">
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'clinicBlue.5', to: 'clinicGreen.5', deg: 120 }}
                  leftSection={<IconCalendar size={20} />}
                  radius="lg"
                >
                  Prendre Rendez-vous
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="clinicBlue"
                  leftSection={<IconInfoCircle size={20} />}
                  radius="lg"
                >
                  En savoir plus
                </Button>
              </Group>

              <SimpleGrid cols={3} spacing="lg" mt="xl">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs" align="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="clinicBlue">
                      <IconUser size={28} />
                    </ThemeIcon>
                    <Text size="xl" fw={700}>
                      150+
                    </Text>
                    <Text size="sm" c="dimmed">
                      Médecins
                    </Text>
                  </Stack>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs" align="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="clinicGreen">
                      <IconUsers size={28} />
                    </ThemeIcon>
                    <Text size="xl" fw={700}>
                      25k+
                    </Text>
                    <Text size="sm" c="dimmed">
                      Patients
                    </Text>
                  </Stack>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs" align="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="gold">
                      <IconClock size={28} />
                    </ThemeIcon>
                    <Text size="xl" fw={700}>
                      24h
                    </Text>
                    <Text size="sm" c="dimmed">
                      Disponible
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Grid.Col>
          
       
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="55px" pos="relative" mt={0} pt={0}>
              <Card shadow="lg" padding="xl" radius="lg" withBorder>
                <Group gap="md">
                  <ThemeIcon size={60} radius="md" variant="light" color="clinicBlue">
                    <IconCalendar size={30} />
                  </ThemeIcon>
                  <Stack gap={4}>
                    <Text size="lg" fw={700}>
                      Rendez-vous
                    </Text>
                    <Text size="sm" c="dimmed">
                      Gestion en temps réel
                    </Text>
                  </Stack>
                </Group>
              </Card>

              <Card shadow="lg" padding="xl" radius="lg" withBorder>
                <Group gap="md">
                  <ThemeIcon size={60} radius="md" variant="light" color="clinicGreen">
                    <IconUser size={30} />
                  </ThemeIcon>
                  <Stack gap={4}>
                    <Text size="lg" fw={700}>
                      Médecins
                    </Text>
                    <Text size="sm" c="dimmed">
                      150+ spécialistes
                    </Text>
                  </Stack>
                </Group>
              </Card>

              <Card shadow="lg" padding="xl" radius="lg" withBorder>
                <Group gap="md">
                  <ThemeIcon size={60} radius="md" variant="light" color="gold">
                    <IconHeartbeat size={30} />
                  </ThemeIcon>
                  <Stack gap={4}>
                    <Text size="lg" fw={700}>
                      Suivi Santé
                    </Text>
                    <Text size="sm" c="dimmed">
                      Monitoring continu
                    </Text>
                  </Stack>
                </Group>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}