import React from 'react';
import PropTypes from 'prop-types';

import { A } from './styles';

const TextLink = ({ href, text, internal }) => (internal ? (
  null // TODO: Setup <Link />
) : (
  <A href={ href } target="_blank">{ text }</A>
));

TextLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  internal: PropTypes.bool,
};

TextLink.defaultProps = {
  href: '#',
  text: 'Link with no text',
  internal: false,
};

export default TextLink;
