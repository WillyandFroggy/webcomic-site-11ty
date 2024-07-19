const { html } = require("common-tags");

function ComicViewer({ title, link }) {
  return html`
    <main>
      <div class="comic-viewer-container">
        <div class="comic-container">
          <img
            id="comic-viewer-comic"
            class=""
            alt="Mrs. Applebee attempts to persuade Bluey into sweeping sparkles off the floor, but her plan is ultimately thwarted by Bluey's playful spirit. She tries not to get too frustrated."
            loading="lazy"
            decoding="async"
            sizes="(min-width: 880px) 880px, 100vw"
            style="
          object-fit: cover;
          max-width: 880px;
          max-height: 880px;
          aspect-ratio: 1;
          width: 100%;
        "
            srcset="
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=640&amp;height=640    640w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=750&amp;height=750    750w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=828&amp;height=828    828w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=880&amp;height=880    880w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=960&amp;height=960    960w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=1080&amp;height=1080 1080w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=1280&amp;height=1280 1280w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=1668&amp;height=1668 1668w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=1760&amp;height=1760 1760w
            "
            src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163&amp;width=880&amp;height=880"
          />
        </div>
        <div class="comic-viewer-nav-links">
          <div class="comic-viewer-left-links">
            <a class="" href="/BR/001">&lt;&lt; First</a
            ><a class="comic-viewer-prev-button" href="/BR/003"
              >&lt; Previous</a
            >
          </div>
          <div class="comic-viewer-right-links">
            <a class="comic-viewer-next-button" href="/BR/005">Next &gt;</a
            ><a href="/BR/005">Latest &gt;&gt;</a>
          </div>
        </div>
        <div class="comic-viewer-ad-buttons">
          <a
            href="https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068308212"
            class="comic-viewer-ad-button"
            >Buy Print</a
          ><a
            href="https://shop.willyandfroggy.com/products/tip-jar"
            class="comic-viewer-ad-button"
            >Tip Jar</a
          >
        </div>
        <a id="comic-viewer-share-link" href="#" class="comic-viewer-share-link"
          ><span>Share Link</span
          ><svg
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.5 6.5L8.5 10.5"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <path
              d="M8.5 13.5L15.5 17.5"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
          </svg>
        </a>
        <div class="comic-viewer-description">
          <h2>Bright Red #<!-- -->004</h2>
          <p>
            Mrs. Applebee attempts to persuade Bluey into sweeping sparkles off
            the floor, but her plan is ultimately thwarted by Bluey's playful
            spirit. She tries not to get too frustrated.
          </p>
        </div>
        <div
          class="preloadingComics"
          style="visibility: hidden; position: absolute; top: 0"
        >
          <img
            alt="preloading prev comic"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 880px) 880px, 100vw"
            style="
          object-fit: cover;
          max-width: 880px;
          max-height: 880px;
          aspect-ratio: 1;
          width: 100%;
        "
            srcset="
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=640&amp;height=640    640w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=750&amp;height=750    750w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=828&amp;height=828    828w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=880&amp;height=880    880w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=960&amp;height=960    960w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=1080&amp;height=1080 1080w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=1280&amp;height=1280 1280w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=1668&amp;height=1668 1668w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=1760&amp;height=1760 1760w
            "
            src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1717975684&amp;width=880&amp;height=880"
          /><img
            alt="preloading next comic"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 880px) 880px, 100vw"
            style="
          object-fit: cover;
          max-width: 880px;
          max-height: 880px;
          aspect-ratio: 1;
          width: 100%;
        "
            srcset="
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=640&amp;height=640    640w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=750&amp;height=750    750w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=828&amp;height=828    828w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=880&amp;height=880    880w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=960&amp;height=960    960w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=1080&amp;height=1080 1080w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=1280&amp;height=1280 1280w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=1668&amp;height=1668 1668w,
              https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=1760&amp;height=1760 1760w
            "
            src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164&amp;width=880&amp;height=880"
          />
        </div>
      </div>
    </main>
  `;
}

module.exports = ComicViewer;
