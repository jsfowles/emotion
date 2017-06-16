import React from 'react';

import { H1Hero, H1, H2, H3, H4, H5, P, Small } from '../../identity/type';
import { Section } from '../../identity/sections';

export default () => (
  <div>
    <Section>
      <H1Hero>Hero Heading</H1Hero>
    </Section>

    <Section>
      <H1>Heading 1</H1>
    </Section>

    <Section>
      <H2>Heading 2</H2>
    </Section>

    <Section>
      <H3>Heading 3</H3>
    </Section>

    <Section>
      <H4>Heading 4</H4>
    </Section>

    <Section>
      <H5>Heading 5</H5>
    </Section>

    <Section>
      <P>
        Paragraph text should be Gotham Regular 18pt* font. This is what bold text
        looks* like in a paragraph, sit amet, consectetur adipisicing elit, statict
        text link tempor incididunt ut labore et hover link aliqua. Ut nostrud
        clicked link minim veniam, quis nostrud excercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </P>
    </Section>

    <Section>
      <Small>Small</Small>
    </Section>
  </div>
);
