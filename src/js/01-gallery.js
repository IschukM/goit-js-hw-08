// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
`,
  ''
);

galleryBox.insertAdjacentHTML('beforeend', markup);

galleryBox.addEventListener('click', onClick);

function onClick(event) {
  console.log(event.target);
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `<div class="modal"><img src="${event.target.dataset.source}" width="800" heigth = "600"></div>`
  );
  instance.show();

  galleryBox.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
