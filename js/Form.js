class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Username");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/frozen flame.jpeg", "game title");
    this.titlepotImg = createImg("./assets/decor 1.png", "game title pot1");
    this.titlepotsImg = createImg("./assets/decor 2.png", "game title pot2");
    this.titlepotssImg = createImg("./assets/decor 3.png", "game title pot3");
    this.titlepotEndImg = createImg("./assets/decor 4.png", "game title pot4");
    this.greeting = createElement("h2");  
  }
//nitytawhitehat8@gmail.com
  setElementsPosition() {
    this.titleImg.position(450, 100);
    this.titlepotImg.position(100, 600);
    this.titlepotsImg.position(450, 600);
    this.titlepotssImg.position(800, 600);
    this.titlepotEndImg.position(1150, 600);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.titlepotImg.class("gameTitles");
    this.titlepotsImg.class("gameTitles");
    this.titlepotssImg.class("gameTitles");
    this.titlepotEndImg.class("gameTitles");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titlepotImg.hide();
    this.titlepotsImg.hide();
    this.titlepotssImg.hide();
    this.titlepotEndImg.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>waiting for another earth helper...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
