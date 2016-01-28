var SCALE = 1 / 10;
var gameImages = {};
var matchedCards = [];

var player;
var ai;
var deck;

function Player(x, y) {
  this.start_x = x || 48;
  this.start_y = y || 450;
  this.cards = [];
};

Player.prototype.draw = function() {
  var newCard = hanafuda.draw();
  if (newCard) {
    var raster = new Raster(gameImages[newCard.id]);
    raster.position.x = this.start_x + this.cards.length * 100;
    raster.position.y = this.start_y;
    raster.scale(SCALE);

    var shiftRaster = function() {
      matchedCards = deck.getMatched(newCard.month);
    };
    var unShiftRaster = function() {
      matchedCards = [];
    };
    raster.onClick = function() {
      matchedCards = deck.getMatched(newCard.month);
      if (matchedCards.length === 1) {
        var target = matchedCards[0];
        this.position = target.position;
        this.rotate(15);
        this.insertAbove(target);
      }
    }
    raster.data = newCard;
    raster.on('mouseenter', shiftRaster);
    raster.on('mouseleave', unShiftRaster);
    this.cards.push(raster);
  } else {
    console.error("No more cards");
  }
}

function AI(x, y) {
  this.start_x = x || 48;
  this.start_y = y || -57;
  this.cards = [];
};

AI.prototype.draw = function () {
  var newCard = hanafuda.draw();
  if (newCard) {
    var raster = new Raster(gameImages[newCard.id]);
    raster.position.x = this.start_x + (this.cards.length) * 100;
    raster.position.y = this.start_y;
    raster.data = newCard;
    raster.scale(SCALE);
    this.cards.push(raster);
  } else {
    console.error("No more cards");
  }
}

function Deck(x, y1, y2) {
  this.start_x = x || 48;
  this.start_y = [
    y1 || 110,
    y2 || 260
  ];
  this.cards = {0: [], 1: []}
}

Deck.prototype.draw = function () {
  var newCard = hanafuda.draw();
  if (newCard) {
    var x = 0, y = 0;
    var raster = new Raster(gameImages[newCard.id]);

    if (this.cards[0].length <= this.cards[1].length) {
      x = this.start_x + (Math.floor(this.cards[0].length) + 4) * 100;
      y = this.start_y[0];
      this.cards[0].push(raster);
    } else {
      x = this.start_x + (Math.floor(this.cards[1].length) + 4) * 100;
      y = this.start_y[1];
      this.cards[1].push(raster);
    }
    raster.position.x = x;
    raster.position.y = y;
    raster.data = newCard;
    raster.scale(SCALE);
  } else {
    console.error("No more cards");
  }
}

Deck.prototype.getMatched = function (month) {
  var matched = [];
  for (var i = 0; i < 2; i++) {
    for (var j in this.cards[i]) {
      if (this.cards[i][j].data.month === month) {
        matched.push(this.cards[i][j]);
      }
    }
  }
  return matched;
}

player = new Player();
ai = new AI();
deck = new Deck();

function preloadImages () {
  var cards = hanafuda.fetchAll();
  var loadedImages = 0;
  for (var i in cards) {
    var image = new Image();
    image.id = cards[i].id;
    image.src = "./image/" + cards[i].picture + ".jpg";
    gameImages[cards[i].id] = image;
    image.onload = function(){
      loadedImages++;
      if (loadedImages == cards.length)
        initGame();
    };
  }
}

function initGame () {
  for (var i = 0; i < 8 ; i++) {
    player.draw();
    ai.draw();
  }
  for (var i = 0; i < 8 ; i++) {
    deck.draw();
  }
}

preloadImages();
