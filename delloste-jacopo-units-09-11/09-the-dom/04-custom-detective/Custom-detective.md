# Custom Detective

**Author:** Jacopo Dell'Oste 

**Date:** April 11, 2025

---

- In this file, we will investigate [Instant Gaming News](https://news.instant-gaming.com/it) watching how the DOM of this website is structured.

- Dato che questo sito è stato creato usando principalmente `div`, `img` e `a`, useremo il seguente comando:

    + `document.querySelectorAll()`: Returns a list of all elements that match a specified CSS selector in the document.

quindi iniziamo a cercare i tag che principali usati:

##  `div`

per ottenere tutti i div, usiamo il seguente comando:

```javascript
document.querySelectorAll("div")
```

dopo aver eseguito il comando nella console del DOM, abbiamo ottenuto questo risultato:

```scss
NodeList(365) [div#__nuxt, div.nuxt-loading-indicator, div.logo-news.logo-mobile, div#news-app.news-content, div.logo-news, div.profile, div.item.closable, div.icon-user.icon-xs, div.icon-home.icon-xs, div.icon-cart.icon-xs, div.icon-calendar.icon-xs, div.icon-discord.icon-xs, div.icon-burger, div.footer, div.apps, div.icons, div.icon-facebook.icon-xs, div.icon-xcom.icon-xs, div.icon-instagram.icon-xs, div.icon-twitch.icon-xs, div.icon-youtube.icon-xs, div.icon-rss.icon-xs, div.links.closable, div.icon-location.icon-xs, div.modal-container, div.modal, div.close, div.icon-language.icon-xl, div.modal-languages, div#news-home.news-container.home, div.news, div.highlighted-container, div.listing-news.listing-horizontal, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.videos, div.icon-video.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.pictures, div.icon-picture.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.pictures, div.icon-picture.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.listing-separator, div.content-news, div.badge, div.tag-trending, div.icon-fire.icon-xxs, div.title, div.text, div.article-data, div.reactions, div.icon-smiley.icon-xs, div.listing-separator, div.columns-container, div.panel-left, div.listing-news.listing-vertical, div.cover, div.video-image, div.content-news, div.badge, div.title, div.text, div.article-data, div.listing-separator, …]
```

come possiamo vedere, abbiamo ottenuto 365 div in tutto il sito web, un numero molto alto e lo si puo vedeere facilmente ispezionando il sito, in quanto quasi ogni blocco è un `div`.

##  `img`

in quanto sito news di videogame, vengono mostrate le immagini di tutti i nuovi titoli in uscita, quindi per visualizzarle utilizziamo il seguente comando:

```javascript
document.querySelectorAll("img")
```

possiamo osservare qui il risultato:

```scss
NodeList(46) [img, img, img, img, img, img, img, img.youtube-play, img, img.youtube-play, img, img, img.youtube-play, img, img, img.youtube-play, img, img, img, img, img.youtube-play, img, img, img, img.youtube-play, img, img, img, img, img.youtube-play, img, img, img, img, img, img, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture, img.picture]
```

possiamo vedere che ci sono 46 immagini, una per ogni news.

##  `a`

in quanto sito di news, vengono mostrate il link alle news, quindi per visualizzare i link utilizziamo il seguente comando:

```javascript
document.querySelectorAll("a")
```

possiamo osservare qui il risultato:

```scss
NodeList(63) [a, a, a.item.closable.selected, a.item.closable, a.item.closable, a.item.closable, a.display-panel, a, a, a.socials-facebook, a.socials-xcom, a.socials-instagram, a.socials-twitch, a.socials-youtube, a.socials-rss, a, a, a.languages, a, a, a, a, a.selected, a.item.breaking-news, a.item.breaking-news, a.item.breaking-news.video-news, a.item.breaking-news, a.item.breaking-news, a.item.video-news, a.item.video-news, a.item.breaking-news.highlighted, a.item.video-news, a.item, a.item.video-news, a.item, a.item, a.item, a.item.video-news, a.item, a.item, a.item.video-news, a.item, a.item, a.item, a.item.video-news, a.item, a.item, a.item, a.button.button-secondary, a.item, a.item.breaking-news, a.button.button-secondary, a.item, a.item, a.item, a.item, a.item, a.button.button-secondary, a.item, a.item, a.item, a.item, a.item]
```

## **News**

in questo caso, le news sono principalmente contenute in div con classi riferenti a quest'ultime, quindi per trovare tutti i blocchi inerenti a quest'ultime utilizziamo il seguente comando:

```javascript
document.querySelectorAll(['class*="news"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(51) [div.logo-news.logo-mobile, div#news-app.news-content, header#header.header-news, div.logo-news, div#news-home.news-container.home, div.news, div.listing-news.listing-horizontal, a.item.breaking-news, div.content-news, a.item.breaking-news, div.content-news, a.item.breaking-news.video-news, div.content-news, a.item.breaking-news, div.content-news, a.item.breaking-news, div.content-news, div.listing-news.listing-vertical, a.item.video-news, div.content-news, a.item.video-news, div.content-news, a.item.breaking-news.highlighted, div.content-news, a.item.video-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, a.item.video-news, div.content-news, div.content-news, div.content-news, div.content-news, div.listing-news.articles, div.content-news, div.icon-news.icon-xxs, a.item.breaking-news, div.content-news]
```

## **News (Structure)**

### Ogni struttura di una news è formulata nella seguente struttura:

- **Badge**

Ogni `div "news"` ha un badge che contiene al suo interno una `span` con classe `tag-time ` che contiene da data in cui è stata pubblicata la news

Quindi vediamo i comandi usati per visualzzarli, iniziamo con i `badge` uando il seguente comando:

```javascript
document.querySelectorAll(['class="badge"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(107) [div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, div.badge, …]
```

ora passiamo ai `tag-time` usando il seguente comando:

```javascript
document.querySelectorAll(['class="tag-time"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(107) [span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, span.tag-time, …]
```

- **Title**

Ogni `div "news"` ha un titolo che contiene al suo interno una `div` con classe `title` che contiene il titolo della news

Quindi vediamo i comandi usati per visualzzarli, iniziamo con i `title` uando il seguente comando:

```javascript
document.querySelectorAll(['class="title"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(107) [div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, div.title, …]
```

- **Text**

Ogni `div "news"` ha un testo che contiene al suo interno una `div` con classe `text` che contiene il testo della news

Quindi vediamo i comandi usati per visualzzarli, usiamo il seguente comando:

```javascript
document.querySelectorAll(['class="text"'])
```
possiamo vedere qui il risultato:

```scss
NodeList(117) [div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, div.text, …]
```

- **Reactions and Pictures**

Ogni `div "news"` ha delle reazioni che contiene al suo interno una `div` con classe `reactions` che contiene le reazioni alla news e la classe `pictures` che dice il numero di immagini presenti nella news

Quindi iniziamo con le `reactions`, per poterle vedere usiamo il seguente comando:

```javascript
document.querySelectorAll(['class="reactions"'])
```

possiamo vedere qui il risultato:
```scss
NodeList(70) [div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions, div.reactions]
```

ora passiamo alle `pictures`, per poterle vedere usiamo il seguente comando:

```javascript
document.querySelectorAll(['class="pictures"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(18) [div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures, div.pictures]
```

## **Video News**

per finire questo sito contiene anche news che hanno la possibilità di far visualizare video, queste news sono dentro alla classe `video-news`, quindi per visualizzarle utilizziamo il seguente comando:

```javascript
document.querySelectorAll(['class*="video-news"'])
```

possiamo vedere qui il risultato:

```scss
NodeList(32) [a.item.breaking-news.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.breaking-news.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news, a.item.video-news]
```

ma ciò che fa partire a tutti gli effetti il video sono gli element `a` con classe `youtube-play`, quindi per visualizzarlo utilizziamo il seguente comando:

```javascript
document.querySelectorAll(['class*="youtube-play"'])
```

possiamo vedere qui il risultato:  

```scss
NodeList(31) [img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play, img.youtube-play]
```
