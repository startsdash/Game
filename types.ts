
export interface ScenarioOption {
  id: string;
  text: string;
}

export interface GameScenario {
  context: string; // The situation (e.g., "A punk sits on a bench...")
  options: ScenarioOption[]; // 3 choices
}

export interface GameResult {
  userAction: string;
  quote: string;
  character: string;
  movie: string;
  director: Director;
  year: string;
  themeColor: string;
  imageUrl?: string;
}

export enum Director {
  TARANTINO = "Квентин Тарантино",
  RITCHIE = "Гай Ричи",
  RODRIGUEZ = "Роберт Родригес",
  JARMUSCH = "Джим Джармуш",
  COEN = "Братья Коэн",
  MCDONAGH = "Мартин Макдона",
  BALABANOV = "Алексей Балабанов",
  KACHANOV = "Роман Качанов"
}
