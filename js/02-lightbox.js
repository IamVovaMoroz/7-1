import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Получили ссылку на div Container
const galleryContainer = document.querySelector('.gallery')

// Переменная для хранения элементов галереи.
//  Результат вызова функции создания всей разметки
const galleryMarkup = createGalleryItem(galleryItems)
// Прикрепили все элементы к div Container
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

console.log(galleryContainer)

createGalleryItem(galleryItems)
// Функция для рендера разметки из массива и создания html
function createGalleryItem (galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">

    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
 </div>
        `
    })
    .join('')
  // console.log(markup)
  return markup
}


var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// Ссылка на активную картинку
// const ImagesUrl = document.querySelector('.gallery__link ')



// Вешаем слушателя на основной контейнер для делегированния и
// отслеживания кликов на детей




// galleryContainer.addEventListener('click', galleryContainerClick)

// // console.log(bigImageUrl.dataset)
// function galleryContainerClick (event) {
//   if (event.target.nodeName !== 'IMG') {
//     return}
//   event.preventDefault();


// const bigImageLink = event.target.dataset.source;

// console.log(bigImageLink)

// const instance = basicLightbox.create(`
// <img src="${bigImageLink}">`)

// instance.show()

// document.addEventListener('keydown', event =>{
//   if(event.key ==='Escape'){
//     console.log(bigImageLink)
//   }

 

// })
// console.log(ImagesUrl)
// }
