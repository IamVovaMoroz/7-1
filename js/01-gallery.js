import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

// Получили ссылку на div Container
const galleryContainer = document.querySelector('.gallery')

// Переменная для хранения элементов галереи.
//  Результат вызова функции создания всей разметки
const galleryMarkup = createGalleryItem(galleryItems)
// Приврепили все элементы к div Container
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

console.log(galleryContainer)

console.log(createGalleryItem(galleryItems))
// Функция для рендера разметки из массива и создания html
function createGalleryItem (galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `
    })
    .join('')
  console.log(markup)
  return markup
}
// Вешаем слушателя на основной контейнер для делегированния и
// отслеживания кликов на детей


// const bigImageUrl = document.querySelector('.gallery__item ')

galleryContainer.addEventListener('click', galleryContainerClick)

// console.log(bigImageUrl.dataset)
function galleryContainerClick (event) {
  if (event.target.nodeName !== 'IMG') {
    return
  }
  event.preventdefault()


const bigImageLink = event.target.dataset.source;

console.log(bigImageLink)
const instance = basicLightbox.create(`
<img src="${original}">`)

instance.show()

}
