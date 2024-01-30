import { Card, Difficulties } from "./entity"

const card1:Card = {
  title: 'Far sight',

  description: 'Look at anything that is about 5 meters away and count slowly to 20. \n  \n   For example: an object in the room, a tree on the street, something in the window.  ',
   subtitle: 'vision',
  image: '../../assets/images/card-media.png',
  benefits: [
    "Relaxes the eye muscles",
    "Prevents eye strain and headaches",
    "Reduces stress and anxiety",
  ],
  difficulty: Difficulties.Hard
}
const card2 = {
  title: 'Power Nap',
  description: 'Embark on a 5-minute power nap mission. Just don t forget to set an alarm unless you want your quick nap to turn into a full-blown siesta! 😴✨',
  subtitle: 'nc eget neque. Maecenas laci , fermentum tempus mauris tincidunt id. Pellentesque dapibus leo eu aliquam aliquet. Proin dictum velit vitae elit porttitor vehicula. Phasellus nec finibus augue. Fusce vestibulum felis tristique porta gravida. Curabitur gravida ut odio ac eleifend. Ut eu nulla mauris.',
  image: '../../assets/images/card-media.png',
  benefits: [
    "Reduced fatigue.",
    "Improved mood",
    "Increased alertness",
  ],
  difficulty:   Difficulties.Easy
}

const card3 = {
  title: 'Toe-Tapping Frenzy',
  description: 'Take 2 minute to release tension by tapping your toes rapidly at the tune of your favourite song',
  subtitle: 'This is subtitle3',
  image: '../../assets/images/card-media.png',
  benefits: [
    "Increases blood circulation",
    "Targets tension in the lower body.",
    "Reduces stress",
  ],
  difficulty: Difficulties.Medium
}


export const notEnoughCardsCard = {
  title: 'Deck is empty!',
  description: 'Maecenas venenatis suscipit orci a porttitor. Phasellus posuere turpis ex, ut tincidunt dolor sagittis a. Nulla facilisi. Nunc ac consequat sapien, at faucibus justo. Nulla facilisis, nunc vitae iaculis ultricies, ligula lacus pulvinar metus, vel euismod felis dui ac ipsum. Ut tempus hendrerit eros, ut malesuada nulla varius nec. ',
  subtitle: ':(',
  image: 'https://picsum.photos/200/300'
}

export const deck = [card1, card2, card3]
