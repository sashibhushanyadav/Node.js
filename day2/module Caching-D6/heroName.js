class actorName {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

module.exports = new actorName("srk");

// Other way.
// module.exports = actorName;
