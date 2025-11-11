import { useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Title,
  Text,
  Divider,
  Stack,
  Grid,
  ThemeIcon,
  Box,
} from "@mantine/core";
import {
  IconLogin,
  IconBrandFacebook,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { Formik, Field, Form } from "formik";

export default function Connexion() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--mantine-color-neutral-1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Paper 
        shadow="xl" 
        radius="xl" 
        withBorder
        style={{
          maxWidth: "800px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Grid gutter={0}>
          {/* --- SECTION GAUCHE : Connexion / Accueil --- */}
          <Grid.Col
            span={{ base: 12, md: 5 }}
            style={{
              background: "linear-gradient(135deg, var(--mantine-color-clinicBlue-5), var(--mantine-color-clinicGreen-5))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "2rem 1.5rem",
              minHeight: "450px",
            }}
          >
            <ThemeIcon size={45} color="white" radius="xl" variant="white">
              <IconLogin size={24} color="var(--mantine-color-clinicBlue-6)" />
            </ThemeIcon>
            <Title order={4} mt="sm" mb="xs" c="white" size="h5">
              Rejoignez-nous !
            </Title>
            <Text c="white" mb="md" size="sm">
              Connectez-vous pour accéder à vos consultations et gérer votre santé.
            </Text>
            <Button
              variant="outline"
              color="white"
              radius="xl"
              onClick={() => setIsLogin(true)}
            >
              Se connecter
            </Button>
          </Grid.Col>

          {/* --- SECTION DROITE : Formulaire --- */}
          <Grid.Col 
            span={{ base: 12, md: 7 }} 
            style={{
              padding: "2rem 1.5rem",
              backgroundColor: "var(--mantine-color-neutral-0)",
            }}
          >
            <Title order={4} size="h5" ta="center" mb="xs" c="var(--mantine-color-clinicBlue-7)">
              Créer un compte
            </Title>

            {/* Boutons sociaux */}
            <Group justify="center" mb="xs" gap="xs">
              <Button
                variant="filled"
                color="#1877F2"
                leftSection={<IconBrandFacebook size={16} />}
                radius="xl"
                size="xs"
              >
                Facebook
              </Button>
              <Button
                variant="filled"
                color="#4285F4"
                leftSection={<IconBrandGoogle size={16} />}
                radius="xl"
                size="xs"
              >
                Google
              </Button>
            </Group>

            <Text ta="center" size="xs" c="dimmed" mb="sm">
              ou utilisez votre email pour vous enregistrer
            </Text>

            <Formik
              initialValues={{
                nom: "",
                prenom: "",
                email: "",
                password: "",
                confirm: "",
                poids: "",
                taille: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({ handleChange, values, isSubmitting }) => (
                <Form>
                  <Stack gap="xs">
                    <Group grow>
                      <Field
                        as={TextInput}
                        label="Nom"
                        name="nom"
                        placeholder="Dupont"
                        onChange={handleChange}
                        value={values.nom}
                        size="sm"
                        required
                      />
                      <Field
                        as={TextInput}
                        label="Prénom"
                        name="prenom"
                        placeholder="Jean"
                        onChange={handleChange}
                        value={values.prenom}
                        size="sm"
                        required
                      />
                    </Group>

                    <Field
                      as={TextInput}
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="exemple@mail.com"
                      onChange={handleChange}
                      value={values.email}
                      size="sm"
                      required
                    />

                    <Group grow>
                      <Field
                        as={PasswordInput}
                        label="Mot de passe"
                        name="password"
                        placeholder="••••••••"
                        onChange={handleChange}
                        value={values.password}
                        size="sm"
                        required
                      />
                      <Field
                        as={PasswordInput}
                        label="Confirmer mot de passe"
                        name="confirm"
                        placeholder="••••••••"
                        onChange={handleChange}
                        value={values.confirm}
                        size="sm"
                        required
                      />
                    </Group>

                    <Group grow>
                      <Field
                        as={TextInput}
                        label="Poids (kg)"
                        name="poids"
                        placeholder="70"
                        onChange={handleChange}
                        value={values.poids}
                        size="sm"
                      />
                      <Field
                        as={TextInput}
                        label="Taille (cm)"
                        name="taille"
                        placeholder="175"
                        onChange={handleChange}
                        value={values.taille}
                        size="sm"
                      />
                    </Group>

                    <Divider my="xs" />
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      fullWidth
                      radius="lg"
                      color="clinicBlue"
                      size="sm"
                    >
                      S'inscrire
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>

            <Text ta="center" size="xs" c="dimmed" mt="md">
              Vous avez déjà un compte ?{" "}
              <Text component="a" href="#" c="clinicBlue" fw={600}>
                Se connecter
              </Text>
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
}