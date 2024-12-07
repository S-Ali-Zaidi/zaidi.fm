import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "S. ALI ZAIDI",
    pageTitleSuffix: "📡 zaidi.fm",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "zaidi.fm",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Raleway", 
        body: "Raleway",
        code: "Jetbrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", //page background
          lightgray: "#e5e5e5", //borders
          gray: "#b8b8b8", //graph links, heavier borders
          darkgray: "#4e4e4e", //body text
          dark: "#2b2b2b", //header text and icons
          secondary: "#284b63", //links, curent graph node
          tertiary: "#84a59d", //hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", //internal link background, highlighted text, highlighted lines of code
          textHighlight: "#fff23688", //markdown highlighted text background
        },
        darkMode: {
          light: "#161618", //page background
          lightgray: "#393639", //borders
          gray: "#646464", //graph links, heavier borders
          darkgray: "#d4d4d4", //body text
          dark: "#ebebec", //header text and icons
          secondary: "#7b97aa", //links, curent graph node
          tertiary: "#84a59d", //hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", //internal link background, highlighted text, highlighted lines of code
          textHighlight: "#b3aa0288", //markdown highlighted text background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.HardLineBreaks(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
