const siteUrl = "https://customer-manage-dip.com";
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "customer-manage-dip.com", "/readme.html"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/post-sitemap.xml`],
  },
};