import Monster from "./Monster";
import gsap from "gsap/all";

export default class Animation {
  constructor() {
    this.domElements = document.getElementsByClassName("monster");
    this.monsters = [];
  }

  create() {
    for (let i = 0; i < this.domElements.length; i++) {
      let monster = new Monster(this.domElements[i]);
      this.monsters.push(monster);
    }
  }
  listen() {
    this.monsters.forEach((monster, i) => {
      monster.monster.addEventListener("mouseenter", () => {
        monster.expand();
        this.monsters.forEach((monster, j) => {
          if (i !== j) {
            monster.contract();
          }
        });
      });
      monster.monster.addEventListener("mouseleave", () => {
        this.monsters.forEach((monster) => monster.reset());
      });
    });
  }
}
