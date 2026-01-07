const { html } = require("common-tags");

function ComicCard({
  title,
  backgroundColor,
  imgUrl
}) {
  return html`
    <div class="comic-card" style="background-color:${backgroundColor}">
      <div class="comic-card__container">
        <a href="#" class="comic-card__image">
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
        </a>
      </div>
    </div>
  `;
}

module.exports = ComicCard;
