import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainerRef = document.querySelector('ul.gallery');

function createHtmlTamplate({preview, original, description }) {
  let htmlTamplate = 
    `<li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
    `;
  
  return htmlTamplate;
}

function renderFullTamplate() {
   const fullTamplate = galleryItems.map((item)=> {
    return createHtmlTamplate(item);
  }).join('');

  // console.log(fullTamplate);

  galleryContainerRef.insertAdjacentHTML('beforeend', fullTamplate);
}

renderFullTamplate();

galleryContainerRef.addEventListener('click', onImgClick)


let gallery = new SimpleLightbox ('.gallery a',{ 
  captionType:'attr',
  captionsData: "alt", 
  captionDelay: 250 
});

function onImgClick(e){
  // отменяем дефолтное поведение ссылок
  e.preventDefault();
  //  фильтр цели делигации
  if (e.target.nodeName !== "IMG"){
    return
  }
  // console.log(e.target)

  //   // получаем ссылку большого размера для отображения в галерее
  // let originalImgUrl = e.target.dataset.source;

gallery.on('show.simplelightbox', function () {
	// Do something…
});


}

