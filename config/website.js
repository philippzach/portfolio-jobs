module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Swiss Startup Jobs - Unique job offers from well funded Swiss startups', // Navigation and Site Title
  _titleAlt: 'Swiss Startup Jobs', // Title for JSONLD
  description: 'Unique job offers from well funded Swiss startups',
  _url: 'https://jobs.swissstartupgroup.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Jobs', // shortname for manifest. MUST be shorter than 12 characters
  author: 'PhilippZach', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
};
