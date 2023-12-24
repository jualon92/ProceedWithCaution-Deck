import { Card } from "./entity"

const card1:Card = {
  title: 'Card 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tortor sit amet risus elementum pharetra vel vel nisl. Sed ut mauris at tortor semper semper. Curabitur ac luctus justo. Integer consectetur dui id dictum sodales. Cras dignissim finibus nunc consequat cursus. Nulla quis nulla porttitor lorem varius laoreet.',
   subtitle: 'This is subtitle1',
  image: '../../assets/images/card-media.png'
}
const card2 = {
  title: 'Card 2',
  description: ' orci nisi laoreet velit, at pharetra urna nu nia tortor eget felis sagittis efficitur. Etiam congue orci purus ',
  subtitle: 'nc eget neque. Maecenas laci , fermentum tempus mauris tincidunt id. Pellentesque dapibus leo eu aliquam aliquet. Proin dictum velit vitae elit porttitor vehicula. Phasellus nec finibus augue. Fusce vestibulum felis tristique porta gravida. Curabitur gravida ut odio ac eleifend. Ut eu nulla mauris.',
  image: '../../assets/images/card-media.png'
}

const card3 = {
  title: 'Card 3',
  description: 'ris ullamcorper, ultricies fringilla libero eleifend. Integer vel ligula luctus, euismod urna sit amet, ultrices tellus',
  subtitle: 'This is subtitle3',
  image: '../../assets/images/card-media.png'
}


export const notEnoughCardsCard = {
  title: 'Deck is empty!',
  description: 'Maecenas venenatis suscipit orci a porttitor. Phasellus posuere turpis ex, ut tincidunt dolor sagittis a. Nulla facilisi. Nunc ac consequat sapien, at faucibus justo. Nulla facilisis, nunc vitae iaculis ultricies, ligula lacus pulvinar metus, vel euismod felis dui ac ipsum. Ut tempus hendrerit eros, ut malesuada nulla varius nec. ',
  subtitle: ':(',
  image: 'https://picsum.photos/200/300'
}

export const deck = [card1, card2, card3]
