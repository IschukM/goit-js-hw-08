import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  </div>
`,
  ''
);

galleryBox.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
gallery.on('show.Simplelightbox');
