const { html } = require("common-tags");

function ComicInfo({
  title,
  description,
  backgroundColor,
  imgUrl,
  link1Title,
  link1Url,
  link2Title,
  link2Url,
  link3Title,
  link3Url,
  link4Title,
  link4Url,
}) {
  return html`
    <div class="comics_banner" style="background-color:${backgroundColor}">
      <div class="comics_container">
        <div class="comics_image">
          <img
            alt="${title}"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 400px) 400px, 100vw"
            style="object-fit:cover;max-width:400px;max-height:350px;aspect-ratio:1.1428571428571428;width:100%"
            srcset="
              ${imgUrl}&amp;width=400&amp;height=350 400w,
              ${imgUrl}&amp;width=640&amp;height=560 640w,
              ${imgUrl}&amp;width=750&amp;height=656 750w,
              ${imgUrl}&amp;width=800&amp;height=700 800w
            "
            src="${imgUrl}&amp;width=400&amp;height=350"
          />
        </div>
        <div class="comics_info">
          <h2>${title}</h2>
          <p>${description}</p>
          <ul>
            <li><a href="${link1Url}">${link1Title}</a></li>
            <li><a href="${link2Url}">${link2Title}</a></li>
            <li>
              <a href="${link3Url}">${link3Title}</a>
            </li>
            <li>
              <a href="${link4Url}">${link4Title}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

module.exports = ComicInfo;
