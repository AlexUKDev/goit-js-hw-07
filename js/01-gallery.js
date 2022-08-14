import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('div.gallery');


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
function createHtmlTamplate({preview, original, description }) {
  const htmlTamplate =
    `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>
    `;

  // console.log(htmlTamplate)
  
  return htmlTamplate;
}

function renderFullTamplate() {
  let fullTamplate = '';

  galleryItems.forEach((preview, original, description) => {
    const itemTamplate = createHtmlTamplate(preview, original, description);
    fullTamplate += itemTamplate;

  })

  // console.log(fullTamplate);

  galleryContainerRef.insertAdjacentHTML('beforeend', fullTamplate);
}

renderFullTamplate();


// Реализация делегирования на div.gallery и получение url большого изображения.
galleryContainerRef.addEventListener('click', onImgClick)

function onImgClick(e){
  // отменяем дефолтное поведение ссылок
  e.preventDefault();

  //  фильтр цели делигации
  if (e.target.nodeName !== "IMG"){
    return
  }

  console.log(e.target)

    // получаем ссылку большого размера для отображения в галерее
  let originalImgUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${originalImgUrl}" width="800" height="600">
  `);
  
  instance.show()

  
  if(basicLightbox.visible()){
    console.log("Модальное окно открыто, подписываюсь на прослушку Escape")
    document.addEventListener('keydown', escClose)
  }
  
  function escClose({key}){
    // console.log(key)
    if (key === 'Escape'){
      instance.close();
      document.removeEventListener('keydown',escClose);
      console.log("Описываюсь от прослушки на нажатие Escape")
    }
  }


}



// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// +
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// +
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//  +
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// +
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// +


// ****** ШАБЛОН РАЗМЕТКИ ******

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>








