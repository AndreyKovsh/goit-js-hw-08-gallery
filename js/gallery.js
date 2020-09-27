import gallery from './gallery-items.js';
console.log(gallery);

const collectionPictures = document.querySelector('.js-gallery');
const image = pictures(gallery);
collectionPictures.insertAdjacentHTML('beforeend', image);
function pictures(images) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link"
            href="${original}"
            >
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
        `;
    })
    .join('');
}
