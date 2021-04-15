import galleryArr from './gallery-items.js'
const refs = {
    gallery: document.querySelector('.gallery'),
    modal: document.querySelector('.lightbox'),
    modalOverlay: document.querySelector('.lightbox__overlay'),
    modalImg: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('[data-action="close-lightbox"]')
}
// Создание разметки
const createListItem = galleryArr.map(({original,preview,description}) => {
    refs.gallery.insertAdjacentHTML('beforeend',
    `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    return refs.gallery
})


// Делегирование 
refs.gallery.addEventListener('click', e => {
    if (e.target.localName === 'img') {
        e.preventDefault(); 
        refs.modal.classList.add('is-open');
        refs.modalImg.src = e.target.dataset.source;
    }
})
refs.closeBtn.addEventListener('click', e => {
    if (e.target.localName === 'button') {
        refs.modal.classList.remove('is-open');
        refs.modalImg.src = '';
    }
})
refs.modalOverlay.addEventListener('click', e => {
    if (e.target.localName !== 'img') {
        refs.modal.classList.remove('is-open');
        refs.modalImg.src = '';
    }
})
window.addEventListener('keyup', e => {
    if(e.key === 'Escape') {
        refs.modal.classList.remove('is-open')
    }
})
refs.modalOverlay.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') {
        e.setAttribute(src, 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg')
    }
})
window.addEventListener('keyup', e => {
    if(e.key === 'ArrowLeft') {
        console.log(e.key)
    }
})