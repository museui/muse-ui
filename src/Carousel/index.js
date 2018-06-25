import '../styles/components/carousel.less';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
  Vue.component(CarouselItem.name, CarouselItem);
};

export { Carousel, CarouselItem };
export default Carousel;
