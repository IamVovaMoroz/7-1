import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galaryContainer = document.querySelector('.gallery')

const galereMarkup = createGalleryItem(galleryItems);

galaryContainer.insertAdjacentHTML('beforeend', galereMarkup)

console.log(galaryContainer)
console.log(createGalleryItem(galleryItem));

function createGalleryItem (galleryItem) {
  const markup = galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt=""${description}"
          />
        </a>
        </div>
        `;
  }).join('');
  console.log(markup)
return markup;
 
}