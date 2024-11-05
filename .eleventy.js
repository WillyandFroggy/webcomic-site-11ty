module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addWatchTarget("src/assets/css/");

  // eleventyConfig.addCollection('posts', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
  // })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
