import { useState } from 'react';
import {
  IconUser,
  IconDashboard,
  IconHistory,
  IconCalendar,
  IconMedicalCross,
  IconLogout,
  IconCalendarCheck,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './EspaceClient.module.css';

const data = [
  { link: '', label: 'Dashboard', icon: IconDashboard },
  { link: '', label: 'Reserver un RDV', icon: IconCalendarCheck },
  { link: '', label: 'Mes RDV', icon: IconCalendar},
  { link: '', label: 'Nos Docteurs', icon: IconMedicalCross },
  { link: '', label: 'Mon Historique', icon: IconHistory },
  { link: '', label: 'Mon Profil', icon: IconUser },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export default function EspaceClient() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} inverted style={{ color: 'white' }} />
          <Code fw={700} className={classes.version}>
            v3.1.2
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}