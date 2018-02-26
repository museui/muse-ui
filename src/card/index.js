import '../styles/components/card.less';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';
import { createSimpleFunctional } from '../utils';

export { CardHeader, CardMedia, CardTitle };
export const Card = createSimpleFunctional('mu-card', 'div', 'mu-card');
export const CardActions = createSimpleFunctional('mu-card-actions', 'div', 'mu-card-actions');
export const CardText = createSimpleFunctional('mu-card-text', 'div', 'mu-card-text');

Card.install = function (Vue) {
  Vue.component(Card.name, Card);
  Vue.component(CardHeader.name, CardHeader);
  Vue.component(CardMedia.name, CardMedia);
  Vue.component(CardTitle.name, CardTitle);
  Vue.component(CardActions.name, CardActions);
  Vue.component(CardText.name, CardText);
};

export default Card;
