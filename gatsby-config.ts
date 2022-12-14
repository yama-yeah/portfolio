import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", 
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-plugin-loadable-components-ssr",
]

};

export default config;
