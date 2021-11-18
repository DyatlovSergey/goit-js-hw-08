import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const itemConatainer = document.querySelector('.gallery');
const itemConatainerMarkup = createGalleryItems(galleryItems);
// console.log(createGalleryItems(galleryItems));

itemConatainer.insertAdjacentHTML('beforeend', itemConatainerMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  scrollZoom: false,
  fadeSpeed: 200,
});
