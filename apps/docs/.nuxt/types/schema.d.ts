import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module`
     */
    ["contentAssets"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/algolia`
     */
    ["algolia"]: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-config-schema`
     */
    ["nuxt-config-schema-compat"]: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases`
     */
    ["contentBases"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module`
     */
    ["seo"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module`
     */
    ["contentAssets"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/algolia`
     */
    ["algolia"]?: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-config-schema`
     */
    ["nuxt-config-schema-compat"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases`
     */
    ["contentBases"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module`
     */
    ["seo"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["C:\\Users\\alix6\\development\\nuxt3-magento-sdk-storefront\\node_modules\\sf-docs-base\\modules\\content-assets\\module.ts", Exclude<NuxtConfig["contentAssets"], boolean>] | ["@nuxtjs/algolia", Exclude<NuxtConfig["algolia"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-config-schema", Exclude<NuxtConfig["nuxt-config-schema-compat"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["C:\\Users\\alix6\\development\\nuxt3-magento-sdk-storefront\\node_modules\\sf-docs-base\\modules\\content-bases.ts", Exclude<NuxtConfig["contentBases"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module`
     */
    ["contentAssets"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/algolia`
     * @see https://www.npmjs.com/package/@nuxtjs/algolia
     */
    ["algolia"]: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-config-schema`
     * @see https://www.npmjs.com/package/nuxt-config-schema
     */
    ["nuxt-config-schema-compat"]: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases`
     */
    ["contentBases"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module
     */
    ["seo"]: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module`
     */
    ["contentAssets"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-assets/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/algolia`
     * @see https://www.npmjs.com/package/@nuxtjs/algolia
     */
    ["algolia"]?: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-config-schema`
     * @see https://www.npmjs.com/package/nuxt-config-schema
     */
    ["nuxt-config-schema-compat"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases`
     */
    ["contentBases"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/sf-docs-base/modules/content-bases").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module
     */
    ["seo"]?: typeof import("C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["C:\\Users\\alix6\\development\\nuxt3-magento-sdk-storefront\\node_modules\\sf-docs-base\\modules\\content-assets\\module.ts", Exclude<NuxtConfig["contentAssets"], boolean>] | ["@nuxtjs/algolia", Exclude<NuxtConfig["algolia"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-config-schema", Exclude<NuxtConfig["nuxt-config-schema-compat"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["C:\\Users\\alix6\\development\\nuxt3-magento-sdk-storefront\\node_modules\\sf-docs-base\\modules\\content-bases.ts", Exclude<NuxtConfig["contentBases"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["C:/Users/alix6/development/nuxt3-magento-sdk-storefront/node_modules/nuxt-seo-utils/dist/module", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: string,

         preload: Array<string>,

         highlighter: string,

         shikiEngine: string,

         langs: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         toc: {
            searchDepth: number,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      contentHead: boolean,

      documentDriven: {
         navigation: boolean,

         surround: boolean,

         injectPage: boolean,
      },

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },
  }
  interface PublicRuntimeConfig {
   siteUrl: string,

   siteName: string,

   siteDescription: string,

   language: string,

   gtag: {
      id: string,

      config: any,

      initialConsent: boolean,

      loadingStrategy: string,
   },

   algolia: {
      apiKey: string,

      applicationId: string,

      lite: boolean,

      cache: boolean,

      instantSearch: {
         theme: string,
      },

      docSearch: any,

      recommend: any,

      globalIndex: string,

      useFetch: boolean,
   },

   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: string,

         preload: Array<string>,

         highlighter: string,

         shikiEngine: string,

         langs: Array<string>,
      },

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   contentBases: {
      baseUrls: Array<any>,

      sources: any,
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      isNuxtContentDocumentDriven: {
         navigation: boolean,

         surround: boolean,

         injectPage: boolean,
      },

      excludeLinks: Array<any>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "seo-utils": {
      canonicalQueryWhitelist: Array<string>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }