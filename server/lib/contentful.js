const createClient = require('contentful').createClient;

exports.initContentful = ({ CONTENTFUL_SPACE, CONTENTFUL_TOKEN, CONTENTFUL_HOST }) => (
  createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN,
    host: CONTENTFUL_HOST || 'cdn.contentful.com',
  })
);
