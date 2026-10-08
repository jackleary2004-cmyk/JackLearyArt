module.exports = function (eleventyConfig) {
  // Only web-ready files ship. The original PNG/JPG exports stay in
  // src/images as source files; each has a .webp sibling (max 2400px)
  // that the pages actually reference.
  eleventyConfig.addPassthroughCopy("src/images/**/*.{webp,mp4,mov,webm,gif,svg}");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
