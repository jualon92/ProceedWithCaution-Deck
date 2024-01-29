export interface Card {
  title: string,
  description:  string,
  subtitle: string,
  image:  string
  benefits: string[],
  difficulty: Difficulty,
}

export const Difficulties = {
  Hard : { color: "danger", message: "Hard as a rock", points: 3},
  Medium : { color: "warning", message: "Not too hard, not too easy", points: 2},
  Easy : { color: "primary", message: "Easy peasy lemon squeezy", points: 1},
}

export const Medals = {
  Bronze : { color: "warning", message: "Bronze", image : "../../assets/images/bronze-medal.png"},
  Silver : { color: "secondary", message: "Silver", image: "../../assets/images/silver-medal.png"},
  Gold : { color: "warning", message: "Gold", image: "../../assets/images/gold-medal.png"},
}

export interface Medal {
  color: string,
  message: string,
  image: string,
}

export interface Difficulty{
  color: string,
  message: string,
  points: number,
}

export interface Deck {
  cards: Card[]
}
