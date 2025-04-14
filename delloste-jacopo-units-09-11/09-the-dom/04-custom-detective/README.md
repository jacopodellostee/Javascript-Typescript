# Custom Detective

**Author:** Jacopo Dell'Oste

**Date:** April 11, 2025

---

- In this file, we will investigate [Instant Gaming News](https://news.instant-gaming.com/it) by examining how the DOM of this website is structured.

- Since this site was created mainly using `div`, `img`, and `a` tags, we will use the following command:

    + `document.querySelectorAll()`: Returns a list of all elements that match a specified CSS selector in the document.

So let's begin by searching for the main tags used:

##  `div`

To get all the divs, we use the following command:

```javascript
document.querySelectorAll("div")
```

After running the command in the DOM console, we got this result:

```scss
NodeList(365) [div#__nuxt, div.nuxt-loading-indicator, div.logo-news.logo-mobile, div#news-app.news-content, div.logo-news, div.profile, div.item.closable, div.icon-user.icon-xs, div.icon-home.icon-xs, div.icon-cart.icon-xs, div.icon-calendar.icon-xs, div.icon-discord.icon-xs, div.icon-burger, div.footer, div.apps, div.icons, div.icon-facebook.icon-xs, div.icon-xcom.icon-xs, div.icon-instagram.icon-xs, div.icon-twitch.icon-xs, div.icon-youtube.icon-xs, div.icon-rss.icon-xs, div.links.closable, div.icon-location.icon-xs, div.modal-container, div.modal, div.close, div.icon-language.icon-xl, div.modal-languages, div#news-home.news-container.home, div.news, div.highlighted-container, div.listing-news.listing-horizontal, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.videos, div.icon-video.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.pictures, div.icon-picture.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.pictures, div.icon-picture.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.listing-separator, div.columns-container, div.panel-left, div.listing-news.listing-vertical, div.cover, div.video-image, div.content-news, div.badge, div.title, div.text, div.article-data, div.listing-separator, …]
```

As we can see, we got 365 `div` elements across the website, a very large number, which is easy to notice by inspecting the site, as almost every block is a `div`.

##  `img`

As a video game news site, it displays images of all the new titles coming out, so to view them we use the following command:

```javascript
document.querySelectorAll("img")
```

Here’s the result:

```scss
NodeList(46) [img, img, img, img, img, img, img, img.youtube-play, img, img.youtube-play, img, img, img.youtube-play, img, img, img.youtube-play, img, img, img, img, img.youtube-play, img, img, img, img.youtube-play, img, img, img, img, img.youtube-play, img, img, img, img, img, img, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture]
```

We can see that there are 46 images, one for each news post.

##  `a`

As a news site, it shows links to news articles. So to view the links we use the following command:

```javascript
document.querySelectorAll("a")
```

Here’s the result:

```scss
NodeList(63) [a, a, a.item.closable.selected, a.item.closable, a.item.closable, a.item.closable, a.display-panel, a, a, a.socials-facebook, a.socials-xcom, a.socials-instagram, a.socials-twitch, a.socials-youtube, a.socials-rss, a, a, a.languages, a, a, a, a, a.selected, a.item.breaking-news, a.item.breaking-news, a.item.breaking-news.video-news, a.item.breaking-news, a.item.breaking-news, a.item.video-news, a.item.video-news, a.item.breaking-news.highlighted, a.item.video-news, a.item, a.item.video-news, a.item, a.item, a.item, a.item.video-news, a.item, a.item, a.item.video-news, a.item, a.item, a.item, a.item.video-news, a.item, a.item, a.item, a.button.button-secondary, a.item, a.item.breaking-news, a.button.button-secondary, a.item, a.item, a.item, a.item, a.item, a.button.button-secondary, a.item, a.item, a.item, a.item, a.item]
```

## **News**

In this case, the news content is mainly contained in `div`s with classes related to news. To find all these blocks, we use the following command:

```javascript
document.querySelectorAll(['class*="news"'])
```

Here’s the result:

```scss
NodeList(51) [div.logo-news.logo-mobile, div#news-app.news-content, header#header.header-news, div.logo-news, div#news-home.news-container.home, div.news, div.listing-news.listing-horizontal, a.item.breaking-news, div.content-news, a.item.breaking-news, div.content-news, a.item.breaking-news.video-news, div.content-news, a.item.breaking-news, div.content-news, a.item.breaking-news, div.content-news, div.listing-news.listing-vertical, a.item.video-news, div.content-news, a.item.video-news, div.content-news, a.item.breaking-news.highlighted, div.content-news, a.item.video-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, div.listing-news.articles, div.content-news, div.icon-news.icon-xxs, a.item.breaking-news, div.content-news]
```

## **News (Structure)**

### Each news structure is built as follows:

- **Badge**

Each `div.news` has a badge that contains a `span` with the class `tag-time` showing the date the news was published.

So let’s see the commands used to view them. Let’s start with the `badge`, using this command:

```javascript
document.querySelectorAll(['class="badge"'])
```

Here’s the result:

```scss
NodeList(107) [div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, …]
```

Now let’s move to `tag-time` using the following command:

```javascript
document.querySelectorAll(['class="tag-time"'])
```

Here’s the result:

```scss
NodeList(107) [span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, …]
```

- **Title**

Each `div.news` has a title that contains a `div` with the class `title` holding the news headline.

We use the following command:

```javascript
document.querySelectorAll(['class="title"'])
```

Here’s the result:

```scss
NodeList(107) [div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, …]
```

- **Text**

Each `div.news` has a `div.text` that contains the news content.

We use:

```javascript
document.querySelectorAll(['class="text"'])
```

Here’s the result:

```scss
NodeList(117) [div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, …]
```

- **Reactions and Pictures**

Each `div.news` includes a `div.reactions` with reactions to the post and a `div.pictures` showing the number of images.

Reactions:

```javascript
document.querySelectorAll(['class="reactions"'])
```

Result:

```scss
NodeList(70) [div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions]
```

Pictures:

```javascript
document.querySelectorAll(['class="pictures"'])
```

Result:

```scss
NodeList(18) [div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures]
```

## **Video News**

Lastly, this site includes news with videos, found in elements with the class `video-news`. To find them:

```javascript
document.querySelectorAll(['class*="video-news"'])
```

Result:

```scss
NodeList(32) [a.item.breaking-news.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.breaking-news.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news]
```

What actually triggers the video is the `a` element with the class `youtube-play`, so we check for those using:

```javascript
document.querySelectorAll(['class*="youtube-play"'])
```

Result:

```scss
NodeList(31) [img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img
```