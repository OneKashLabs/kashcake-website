import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';

const RELEASES = 'https://github.com/OneKashLabs/KashCake/releases';
const PRIVACY = 'https://github.com/OneKashLabs/KashCake/blob/main/PRIVACY.md';
const CERT = 'E9:60:00:6A:09:F5:9A:A5:1F:F4:EE:E8:C7:D8:0F:DA:C8:71:A2:12:83:28:F2:73:61:CD:AA:66:92:34:EA:D0';

type Shot = {img: string; alt: string; title: string; caption: string};

const SHOTS: Shot[] = [
  {
    img: '/img/app/reminder_sheet.webp',
    alt: 'Reminder choices: on the day, 1 day, 2 days or 1 week before at 9 AM, or a custom time',
    title: 'Pick your reminder',
    caption: 'On the day, or up to 30 days before, at the time you choose.',
  },
  {
    img: '/img/app/quick_view.webp',
    alt: 'A birthday sheet: turning 40, with message, email and share buttons',
    title: 'Send a wish',
    caption: 'By message, email or any app that shares text.',
  },
  {
    img: '/img/app/search_anniversaries.webp',
    alt: 'Search showing only anniversaries, nearest first',
    title: 'Find anyone',
    caption: 'Search by name, or show only birthdays or only anniversaries.',
  },
];

type Tile = {title: string; body: string};

const TILES: Tile[] = [
  {title: 'Ages and milestones', body: '“Turning 40” when the birth year is known, and a badge for the big ones.'},
  {title: 'Home-screen widget', body: 'The next Cake Days without opening the app.'},
  {title: 'Your app name', body: 'KashCake, Cake Days, Birthdays or Celebrations. Same icon.'},
  {title: 'Edit in Contacts', body: 'Fix a date in your Contacts app, straight from KashCake.'},
  {title: 'Missed reminders', body: 'A reminder missed while the phone was off shows when it’s back on.'},
  {title: 'Read only', body: 'KashCake never adds, changes or deletes a contact.'},
];

function Hero(): ReactNode {
  return (
    <header className="kc-hero">
      <div className="container kc-hero__inner">
        <div>
          <Heading as="h1" className="kc-hero__title">
            Never forget
            <br />
            a Cake Day.
          </Heading>
          <p className="kc-hero__lead">Birthday and anniversary reminders from your contacts.</p>
          <div className="kc-hero__cta">
            <Link className="kc-btn kc-btn--pink" to="/beta/">
              Join the beta
            </Link>
            <Link className="kc-btn kc-btn--line" href={RELEASES}>
              Download the APK
            </Link>
          </div>
          <p className="kc-hero__note">Free and open source. Works on Android 12 and newer.</p>
        </div>
        <div className="kc-hero__art">
          <div className="kc-phone kc-hero__back">
            <img src={useBaseUrl('/img/app/settings.webp')} alt="" width={600} height={1333} />
          </div>
          <div className="kc-phone kc-hero__front">
            <img
              src={useBaseUrl('/img/app/home.webp')}
              alt="KashCake's list of upcoming birthdays and anniversaries"
              width={600}
              height={1333}
            />
          </div>
          <ThemedImage
            className="kc-hero__kash"
            alt=""
            sources={{
              light: useBaseUrl('/img/kash/kash_cake.webp'),
              dark: useBaseUrl('/img/kash/kash_cake_dark.webp'),
            }}
          />
        </div>
      </div>
    </header>
  );
}

function Privacy(): ReactNode {
  return (
    <section className="kc-privacy">
      <div className="container">
        <Heading as="h2">No internet access.</Heading>
        <p>KashCake can’t reach the internet. It reads your contacts, never changes them, and collects nothing.</p>
        <Link href={PRIVACY}>Privacy policy</Link>
      </div>
    </section>
  );
}

type Step = {title: string; body: string};

const STEPS: Step[] = [
  {title: 'Dates in your contacts', body: 'The birthdays and anniversaries you already keep.'},
  {title: 'Turn them on', body: 'One switch for birthdays, one for anniversaries.'},
  {title: 'Change a date in Contacts', body: 'KashCake updates, even while it’s closed.'},
];

function HowItWorks(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <Heading as="h2" className="kc-heading">
          How it works with your contacts
        </Heading>
        <ol className="kc-flow">
          {STEPS.map((s) => (
            <li key={s.title}>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Shots(): ReactNode {
  return (
    <section className="kc-section kc-section--mist">
      <div className="container">
        <Heading as="h2" className="kc-heading">
          Remind, wish and find.
        </Heading>
        <div className="kc-shots">
          {SHOTS.map((s) => (
            <figure className="kc-shot" key={s.img}>
              <div className="kc-phone">
                <img src={useBaseUrl(s.img)} alt={s.alt} width={600} height={1333} loading="lazy" decoding="async" />
              </div>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.caption}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tiles(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <Heading as="h2" className="kc-heading">
          Also in KashCake
        </Heading>
        <div className="kc-tiles">
          {TILES.map((t) => (
            <div className="kc-tile" key={t.title}>
              <Heading as="h3">{t.title}</Heading>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Get(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <Heading as="h2" className="kc-heading" id="get">
          Get KashCake
        </Heading>
        <div className="kc-get">
          <div className="kc-get__item">
            <Heading as="h3">Google Play (beta)</Heading>
            <p>Join the test group, then install from Play.</p>
            <Link to="/beta/">Join the beta</Link>
          </div>
          <div className="kc-get__item">
            <Heading as="h3">GitHub</Heading>
            <p>A signed APK for each release.</p>
            <Link href={RELEASES}>Download the APK</Link>
          </div>
        </div>
        <p className="kc-cert">
          Signing certificate SHA-256: <code>{CERT}</code>
        </p>
        <p className="kc-requires">
          Requires Android 12 or later. Contacts access to import dates, and notifications for reminders.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Birthday reminders for Android"
      description="Birthday and anniversary reminders from your contacts on Android. No internet access. Free and open source.">
      <Hero />
      <main>
        <Privacy />
        <HowItWorks />
        <Shots />
        <Tiles />
        <Get />
      </main>
    </Layout>
  );
}
