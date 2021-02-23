import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ArticlePage from '../pages/ArticlePage/ArticlePage';
import CartCheckoutPage from '../pages/CartCheckoutPage/CartCheckoutPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import MainPage from '../pages/MainPage/MainPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import SamplesPage from '../pages/SamplesPage/SamplesPage';

export const pagesData = [
  {
    path: '/aboutuspage',
    exact: true,
    component: AboutUsPage,
  },
  {
    path: '/articlepage',
    component: ArticlePage,
  },
  {
    path: '/cartcheckoutpage',
    component: CartCheckoutPage,
  },
  {
    path: '/categorypage',
    component: CategoryPage,
  },
  {
    path: '/contactspage',
    component: ContactsPage,
  },
  {
    path: '/productpage',
    component: ProductPage,
  },
  {
    path: '/samplespage',
    component: SamplesPage,
  },
  {
    path: '/newspage',
    component: NewsPage,
  },
  {
    path: '/mainpage',
    component: MainPage,
  },
  {
    component: NotFoundPage,
  },
];

export const footerData = [
  {
    title: 'Категорії',
    item : [
      {
        to: '/categorypage',
        name: 'ROAD SERIES',
      },
      {
        to: '/categorypage',
        name: 'STREET SERIES',
      },
      {
        to: '/categorypage',
        name: 'MOUNTAIN SERIES',
      },
    ]
  },
  {
    title: 'Інформація',
    item : [
      {
        to: '/aboutuspage',
        name: 'Про нас',
      },
      {
        to: '/contactspage',
        name: 'Контакти',
      },
    ]
  },
  {
    title: 'Категорії',
    item : [
      {
        to: '/categorypage',
        name: 'ROAD SERIES',
      },
      {
        to: '/categorypage',
        name: 'STREET SERIES',
      },
      {
        to: '/categorypage',
        name: 'MOUNTAIN SERIES',
      },
    ]
  },
  {
    title: 'Інформація',
    item : [
      {
        to: '/aboutuspage',
        name: 'Про нас',
      },
      {
        to: '/contactspage',
        name: 'Контакти',
      },
    ]
  },
]
