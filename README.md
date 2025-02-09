<!-- Anchor to top -->
<a id="readme-top"></a>
# Image viewer
This project is a responsive ImageViewer.

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#builtwith">Built with</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#additional-notes">Additional notes</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</details>

*Image Viewer app is a simple, good looking, performant image browser, it can perform searches and is backed with rijksmuseum image API.*

<a id="builtwith"></a>
## Built with
The project is built with : 
- Vite
- Vue 3
- TypeScript
- Pinia
- Nuxt
<br/>

with support of :
- Vue Router
- Google Fonts
- Rijksmuseum API

<p style="text-align:right">(<a href="#readme-top">back to top</a>)</p>

<a id="getting-started"></a>
## Getting started

Clone repository:
```git clone git@github.com:SebGui/image-viewer.git```
(At the desired location)

Install dependencies :
```npm install```
(In the root folder of the repository)

Run local dev environment :
```npm run dev```
(Project will be visible at :  `http://localhost:3000`)

**Note** : For easier installation, i pushed my developement key to the API, but in a production context we wouldn't push our key to git, it is supposed to not be exposed.

<p style="text-align:right">(<a href="#readme-top">back to top</a>)</p>

<a id="features"></a>
## Features

### Header
#### The header contains a home icon linking to the root of the app.

### Search Bar
#### The search bar is used to perform a filtered search depending on search terms, to submit press enter or click the submit button.

### Image List
#### The image list shows by default 20 tiles, on hover (or tap for mobile devices) you will see a bottom aligned overlay revealing the title of the image, the related animation/style for each single image, and the full resolution image. (if the image returns an error, a default image placeholder will be shown)

### Load More button
#### The load more button gets the next 20 images to the related search (or default request), on click it will reveal a spinner and show the next requested images.

### Back to top button
#### To enhance the UX, i added a back to top button to avoid scrolling a lot after an extended load more button interaction. Animation on reveal and on hide for a smoother flow.

### Error page
#### Created an error page for all the request getting out of the scope of our router (or back requests). It show a short message, the error code, the error message, and a button to go back to the home page (it has a bit of styling, and is responsive).

<p style="text-align:right">(<a href="#readme-top">back to top</a>)</p>


<a id="additional-notes"></a>
## Additionnal notes/features

### Vue masonry
We could have used vue-masonry library here, to make a fancy looking wall that based on the height of the images would create a wall of images of different sizes, leaving no blank spaces. 

### Auto load more (on scroll)
We could have done a "automatic load more" on the current scroll reaching (or getting close) the end.

### Clear filter
We could have added a "clear filter" button to have a potential more obvious options to step back from a filtered search back to a global search.

### Detailed view
We could have implemented a detail view where we would show more details about the image and a bigger view of the high quality images.

### Secret management
Made use of /server folder to use correctly useRuntimeConfig for secret security/exposure


<p style="text-align:right">(<a href="#readme-top">back to top</a>)</p>

<a id="license"></a>
## License
This project is licensed under Sebastien G.

<p style="text-align:right">(<a href="#readme-top">back to top</a>)</p>
