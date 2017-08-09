import React from 'react';

import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';

import { stylesheet } from './styles.css';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <title>Belly</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
