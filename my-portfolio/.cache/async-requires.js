// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-portfolio-under-content-js": () => import("../src/templates/portfolioUnderContent.js" /* webpackChunkName: "component---src-templates-portfolio-under-content-js" */),
  "component---src-templates-page-js": () => import("../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-portfolio-js": () => import("../src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-templates-blog-post-list-js": () => import("../src/templates/blogPostList.js" /* webpackChunkName: "component---src-templates-blog-post-list-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

