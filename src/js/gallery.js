import gallery from './gallery-items.js';

const collectionPictures = document.querySelector('.js-gallery');
const image = pictures(gallery);

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
collectionPictures.insertAdjacentHTML('beforeend', image);

const modal = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const modalBtnClose = document.querySelector('.lightbox__button');

function modalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modal.classList.add('is-open');
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;
}

function modalClose(event) {
  modal.classList.remove('is-open');
}

collectionPictures.addEventListener('click', modalOpen);
modalBtnClose.addEventListener('click', modalClose);
