import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const GROUP = 'https://groups.google.com/g/onekash-labs';
const OPT_IN = 'https://play.google.com/apps/testing/org.onekash.kashcake';
const PLAY = 'https://play.google.com/store/apps/details?id=org.onekash.kashcake';

export default function Beta(): ReactNode {
  return (
    <Layout title="Join the beta" description="Get KashCake from Google Play before it goes public.">
      <header className="kc-pagehead">
        <div className="container">
          <Heading as="h1">Join the beta</Heading>
          <p>Get KashCake from Google Play before it goes public. Use one Google account for all three steps.</p>
        </div>
      </header>
      <main className="kc-section">
        <div className="container">
          <ol className="kc-steps">
            <li>
              <Heading as="h3">Join the group</Heading>
              <p>
                Open <Link href={GROUP}>groups.google.com/g/onekash-labs</Link> and tap Join group.
              </p>
            </li>
            <li>
              <Heading as="h3">Become a tester</Heading>
              <p>
                Open the <Link href={OPT_IN}>testing page</Link> and tap Become a tester.
              </p>
            </li>
            <li>
              <Heading as="h3">Install from Google Play</Heading>
              <p>
                Install <Link href={PLAY}>KashCake from Google Play</Link>. Allow a few minutes after
                step 2.
              </p>
            </li>
          </ol>
          <div className="kc-notes">
            <Heading as="h2">Stay for 14 days</Heading>
            <p>Google needs testers opted in for 14 days in a row before KashCake can go public.</p>
            <Heading as="h2">Found a problem?</Heading>
            <p>
              Open an issue on <Link href="https://github.com/OneKashLabs/KashCake/issues">GitHub</Link>.
              Leave real names and dates out of it.
            </p>
            <Heading as="h2">Leave the beta</Heading>
            <p>
              Open the <Link href={OPT_IN}>testing page</Link> and tap Leave the program.
            </p>
            <Heading as="h2">Not on Google Play?</Heading>
            <p>
              Download the APK from <Link href="https://github.com/OneKashLabs/KashCake/releases">GitHub Releases</Link>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
