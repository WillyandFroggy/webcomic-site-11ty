const { html } = require("common-tags");

function ComicCard({
  title,
  link,
  backgroundColor,
  imgUrl
}) {
  return html`
    <div class="comic-card">
      <div class="comic-card__container">
        <a href="${link}" class="comic-card__image" style="background-color:${backgroundColor}">
          <img
            alt="${title}"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 400px) 428px, 100vw"
            srcset="
              ${imgUrl}&amp;width=400&amp;height=350 400w,
              ${imgUrl}&amp;width=640&amp;height=560 640w,
              ${imgUrl}&amp;width=750&amp;height=656 750w,
              ${imgUrl}&amp;width=800&amp;height=700 800w
            "
            src="${imgUrl}&amp;width=400&amp;height=350"
          />
        </a>
        <a href="${link}" class="comic-card__title">
          <h2>${title}</h2>
        </a>
      </div>
    </div>
  `;
}

module.exports = ComicCard;
