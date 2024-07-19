const { html } = require("common-tags");

function ComicInfo({ title, link }) {
  return html` <div>${title} and also ${link}</div> `;
}

module.exports = ComicInfo;
