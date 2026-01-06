const ComicViewer = require("./src/_includes/components/ComicViewer");
const ComicCard = require("./src/_includes/components/ComicCard");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addShortcode("ComicViewer", ComicViewer);
  eleventyConfig.addShortcode("ComicCard", ComicCard);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add custom filter for zero-padding numbers
  eleventyConfig.addFilter("padZero", function(num, size = 3) {
    return String(num).padStart(size, '0');
  });

  eleventyConfig.addCollection("blue_comics", function (collection) {
    return collection.getAll();
  });

  eleventyConfig.addCollection("br_comics", function (collection) {
    return collection.getAll();
  });

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
