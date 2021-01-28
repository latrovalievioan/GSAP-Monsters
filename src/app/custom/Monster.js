import gsap from "gsap/all";

export default class Monster {
  constructor(monster) {
    this.monster = monster;
  }
  expand() {
    gsap.to(this.monster, { width: "80%", duration: 0.5, id: "expand" });
  }
  contract() {
    gsap.to(this.monster, { width: "4%", duration: 0.5, id: "contract" });
  }
  reset() {
    gsap.to(this.monster, { width: "16.6%", duration: 0.5, id: "reset" });
  }
}
