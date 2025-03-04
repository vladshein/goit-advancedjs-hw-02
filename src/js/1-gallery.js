// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox);

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// create a template
function processImageLi(productItem) {
  const liTemplate = `
  <li class="gallery-item">
    <a class="gallery-link" href="${productItem.original}">
      <img
        class="gallery-image"
        src="${productItem.preview}"
        // data-source="${productItem.original}"
        alt="${productItem.description}"
      />
    </a>
  </li>`;
  return liTemplate;
}

// add products acording to template
const productsString = images.map(processImageLi).join('');

const element = document.querySelector('.gallery');
element.innerHTML = productsString;
console.log(element);

// const galleryListener = element.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   console.log(event.target.dataset.source);
//   //add resize of window
//   const instance = basicLightbox.create(`
// 	<img
//       src="${event.target.dataset.source}"
//       alt="${event.target.description}"
//     />
// `);
//   console.log(instance);
//   instance.show();
//   // process modal window
// });

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
