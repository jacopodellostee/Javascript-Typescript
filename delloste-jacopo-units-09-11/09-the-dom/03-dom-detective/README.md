# DOM Detective

**Author:** Jacopo Dell'Oste 

**Date:** April 11, 2025

---

- In this file, we will investigate [www.gog.com](https://www.gog.com) using the developer tools to inspect the DOM and write JavaScript in the console to find the following elements:

    + Every image on the page

    + The main menu at the top of the page

    + All the news items under "News"

    + The footer

    + All the social media links at the bottom of the page

---

## **⚠️ WARNING ⚠️**

A peculiarity we will encounter often is that many elements **are not the actual semantic elements**, but rather `div` elements with class names that **contain** the name they refer to (e.g., "news...", "footer...", etc.).

- This is a **bad practice** when building websites because:

  1. The code becomes hard to read and confusing  

  2. It negatively impacts SEO ranking  

  3. It demonstrates a poor understanding of the HTML and CSS languages, it can also lead to errors and inconsistencies in the code. 


---

##  Every image on the page

To retrieve all images on the page, we used the `querySelectorAll()` method and the CSS selector `"img"` like so:

```js
document.querySelectorAll("img");
```

and this is the result:

```scss
NodeList(268) [img#CybotCookiebotDialogPoweredbyImage, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.CybotExternalLinkArrow, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, …]
```

---

##  The main menu at the top of the page

A peculiarity is that these elements do **not** have a class named `"menu"` directly, but **various classes containing** the word "menu".

So to find the main menu, we used:

```js
document.querySelectorAll('[class*="menu"]');
```

the result is:

```scss
NodeList(968) [div.menu-overlay, nav.menu.menu-prices-in-eur.menu--{{.menu.currentOs.|.lowercase.}}.menu-curr-symbol-before.menu-lan…, div.menu__container, a.menu__logo, svg.menu__logo-icon, div.menu-main.hide-in-lite-mode, div.menu-item.has-submenu.menu-item--animated.hide-in-lite-mode.js-menu-store, a.menu-link.menu-uppercase.js-menu-link, svg.menu-link__dropdown-icon, span.menu-triangle, div.menu-submenu.menu-store__submenu.js-menu-sloped-submenu, div.menu-section-layer.menu-section-layer--{{.games.selectedCategory.name.}}, div.menu-custom-category.menu-product-state-holder, a.menu-custom-category__link, div.menu-custom-category__bg-container, div.menu-custom-category__bg, div.menu-custom-category__content, img.menu-custom-category__logo, p.menu-custom-category__description, div.menu-custom-category__price, span.menu-custom-category__price-regular._price, a.menu-custom-category__price-btn, span.menu-custom-category__price-btn-content--in-cart, svg.menu-custom-category__price-btn-icon, span.menu-custom-category__price-btn-content--owned, span.menu-custom-category__price-btn-content--buy-now, span.menu-custom-category__price-btn-content--buy-now, a.menu-custom-category__join-btn, span.menu-custom-category__join-btn-content--owned, span.menu-custom-category__join-btn-content--join-now, div.menu-section-layer__custom-bg, section.menu-cdpr-category, picture.menu-cdpr-category-background, img.menu-cdpr-category-background__image, h2.menu-cdpr-category__title, section.menu-cdpr-category-products, h3.menu-cdpr-category-products__title, div.menu-cdpr-category-products__tiles, div.menu-category-item, div.menu-product.menu-product--grid.menu-product-state-holder.js-focusable-element, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text, svg.menu-product__cart-icon, span.menu-product__price-btn-text, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text.menu-product__price-btn-text--join, a.menu-product__link, span.menu-product__loader-title, img.menu-product__image, img.menu-product__image.menu-product__image--tall, svg.menu-product__is-wishlisted, div.menu-product__content, div.menu-product__content-in, div.menu-product__os.js-os-support, i.menu-product__os-icon.menu-product__os-icon--windows, i.menu-product__os-icon.menu-product__os-icon--mac, i.menu-product__os-icon.menu-product__os-icon--linux, div.menu-product__movie-label, div.menu-product__flags, span.menu-product__flag.menu-product__flag--soon, span.menu-product__flag.menu-product__flag--in-dev, div.menu-product__discount.product-state__discount, span.menu-product__discount-text, div.menu-category-item, div.menu-product.menu-product--grid.menu-product-state-holder.js-focusable-element, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text, svg.menu-product__cart-icon, span.menu-product__price-btn-text, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text.menu-product__price-btn-text--join, a.menu-product__link, span.menu-product__loader-title, img.menu-product__image, img.menu-product__image.menu-product__image--tall, svg.menu-product__is-wishlisted, div.menu-product__content, div.menu-product__content-in, div.menu-product__os.js-os-support, i.menu-product__os-icon.menu-product__os-icon--windows, i.menu-product__os-icon.menu-product__os-icon--mac, i.menu-product__os-icon.menu-product__os-icon--linux, div.menu-product__movie-label, div.menu-product__flags, span.menu-product__flag.menu-product__flag--soon, span.menu-product__flag.menu-product__flag--in-dev, div.menu-product__discount.product-state__discount, span.menu-product__discount-text, div.menu-category-item, div.menu-product.menu-product--grid.menu-product-state-holder.js-focusable-element, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text, svg.menu-product__cart-icon, span.menu-product__price-btn-text, div.product-state__price-btn.menu-product__price-btn.menu-product__price-btn--active, span.menu-product__price-btn-text.menu-product__price-btn-text--join, a.menu-product__link, span.menu-product__loader-title, img.menu-product__image, img.menu-product__image.menu-product__image--tall, …]
```

---

##  All the news items under "News"

To find all elements referring to the news section, we used:

```js
document.querySelectorAll('[class*="news"]');
```

Result:

```scss
NodeList(80) [div.news-section__slide.ng-star-inserted, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, div.news-section__slide.ng-star-inserted, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, div.news-section__slide.ng-star-inserted, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count, a.news-tile, picture.news-tile, div.news-tile__title-wrapper, div.news-tile__info-wrapper, div.news-tile__comments-wrapper, span.news-tile__comments-icon.icon-comment, span.news-tile__comments-count]
```

---

##  The footer

To find the footer, we used:

```js
document.querySelectorAll('[class*="footer"]');
```

Result:

```scss
NodeList(228) [div.menu-cdpr-category__footer-links, div.menu-classical-category-footer, a.menu-classical-category-footer__button, div.menu-language-and-currency__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, div.product-tile__footer, …]
```

---

##  All the social media links at the bottom of the page

To find the social media links, we used `querySelectorAll()` with the CSS selector `[class*="footer"][class*="social"]`, targeting each social platform individually. These social links are located in the footer, so we specifically look for class names that contain both `footer` and the name of the platform (unfortnally this was the only method we can use):

So we used the following code to find the social media links (the site has only 3 social media: Facebook, Twitter (now X), and Twitch):

```js
document.querySelectorAll('[class*="footer"][class*="facebook"]');
```

```js
document.querySelectorAll('[class*="footer"][class*="twitter"]');
```


```js
document.querySelectorAll('[class*="footer"][class*="twitch"]');
```

And here you can see the result for each social media:

Facebook:

```scss
NodeList(2) [i.footer-ic.footer-icon-facebook.footer-fb, i.footer-ic.footer-icon-facebook.footer-fb]
```

Twitter:

```scss
NodeList(2) [i.footer-ic.footer-icon-twitter.footer-twitter, i.footer-ic.footer-icon-twitter.footer-twitter]
```
Twitch:

```scss
NodeList(2) [i.footer-ic.footer-icon-twitch.footer-twitch, i.footer-ic.footer-icon-twitch.footer-twitch]
```


