(function(self){

  var TYPE = {Kasu: 'kasu', Tanzaku: 'tanzaku', Tane: 'tane', Kou: 'kou'};

  function Card(month, flower, type, name, value, picture) {
    this.month = month;
    this.flower = flower;
    this.type = type;
    this.name = name;
    this.value = value;
    this.picture = picture;
    this.id = month * 10 + value;
  }

  Card.prototype.toString = function () {
    var value = "";
    switch (this.type) {
      case TYPE.Kasu:
        value = "のカス"; break;
      case TYPE.Tanzaku:
      case TYPE.Tane:
      case TYPE.Kou:
        value = "に" + this.name;
    }
    return this.flower + value;
  }

  var DECK = [];

  function initializeDeck () {
    DECK.push(new Card(1,  '松',   'kasu',    'カス',     1, '46226337_p3_master1200'));
    DECK.push(new Card(1,  '松',   'kasu',    'カス',     2, '46226337_p2_master1200'));
    DECK.push(new Card(1,  '松',   'tanzaku', '赤短',     3, '46226337_p1_master1200'));
    DECK.push(new Card(1,  '松',   'kou',     '鶴',       4, '46226337_p0_master1200'));
    DECK.push(new Card(2,  '梅',   'kasu',    'カス',     1, '46226379_p3_master1200'));
    DECK.push(new Card(2,  '梅',   'kasu',    'カス',     2, '46226379_p2_master1200'));
    DECK.push(new Card(2,  '梅',   'tanzaku', '赤短',     3, '46226379_p1_master1200'));
    DECK.push(new Card(2,  '梅',   'tane',    '鶯',       4, '46226379_p0_master1200'));
    DECK.push(new Card(3,  '桜',   'kasu',    'カス',     1, '46248132_p3_master1200'));
    DECK.push(new Card(3,  '桜',   'kasu',    'カス',     2, '46248132_p2_master1200'));
    DECK.push(new Card(3,  '桜',   'tanzaku', '赤短',     3, '46248132_p1_master1200'));
    DECK.push(new Card(3,  '桜',   'kou',     '幕',       4, '46248132_p0_master1200'));
    DECK.push(new Card(4,  '藤',   'kasu',    'カス',     1, '46248701_p3_master1200'));
    DECK.push(new Card(4,  '藤',   'kasu',    'カス',     2, '46248701_p2_master1200'));
    DECK.push(new Card(4,  '藤',   'tanzaku', '短冊',     3, '46248701_p1_master1200'));
    DECK.push(new Card(4,  '藤',   'tane',    '不如帰',   4, '46248701_p0_master1200'));
    DECK.push(new Card(5,  '菖蒲', 'kasu',    'カス',     1, '46254982_p3_master1200'));
    DECK.push(new Card(5,  '菖蒲', 'kasu',    'カス',     2, '46254982_p2_master1200'));
    DECK.push(new Card(5,  '菖蒲', 'tanzaku', '短冊',     3, '46254982_p1_master1200'));
    DECK.push(new Card(5,  '菖蒲', 'tane',    '八橋',     4, '46254982_p0_master1200'));
    DECK.push(new Card(6,  '牡丹', 'kasu',    'カス',     1, '46255216_p3_master1200'));
    DECK.push(new Card(6,  '牡丹', 'kasu',    'カス',     2, '46255216_p2_master1200'));
    DECK.push(new Card(6,  '牡丹', 'tanzaku', '青短',     3, '46255216_p1_master1200'));
    DECK.push(new Card(6,  '牡丹', 'tane',    '蝶',       4, '46255216_p0_master1200'));
    DECK.push(new Card(7,  '萩',   'kasu',    'カス',     1, '46255405_p3_master1200'));
    DECK.push(new Card(7,  '萩',   'kasu',    'カス',     2, '46255405_p2_master1200'));
    DECK.push(new Card(7,  '萩',   'tanzaku', '短冊',     3, '46255405_p1_master1200'));
    DECK.push(new Card(7,  '萩',   'tane',    '猪',       4, '46255405_p0_master1200'));
    DECK.push(new Card(8,  '坊主', 'kasu',    'カス',     1, '46265112_p3_master1200'));
    DECK.push(new Card(8,  '坊主', 'kasu',    'カス',     2, '46265112_p2_master1200'));
    DECK.push(new Card(8,  '坊主', 'tane',    '雁',       3, '46265112_p1_master1200'));
    DECK.push(new Card(8,  '坊主', 'kou',     '月',       4, '46265112_p0_master1200'));
    DECK.push(new Card(9,  '菊',   'kasu',    'カス',     1, '46283122_p3_master1200'));
    DECK.push(new Card(9,  '菊',   'kasu',    'カス',     2, '46283122_p2_master1200'));
    DECK.push(new Card(9,  '菊',   'tanzaku', '青短',     3, '46283122_p1_master1200'));
    DECK.push(new Card(9,  '菊',   'tane',    '盃',       4, '46283122_p0_master1200'));
    DECK.push(new Card(10, '紅葉', 'kasu',    'カス',     1, '46293504_p3_master1200'));
    DECK.push(new Card(10, '紅葉', 'kasu',    'カス',     2, '46293504_p2_master1200'));
    DECK.push(new Card(10, '紅葉', 'tanzaku', '青短',     3, '46293504_p1_master1200'));
    DECK.push(new Card(10, '紅葉', 'tane',    '鹿',       4, '46293504_p0_master1200'));
    DECK.push(new Card(11, '雨',   'kasu',    'カス',     1, '46293776_p3_master1200'));
    DECK.push(new Card(11, '雨',   'tanzaku', '短冊',     2, '46293776_p2_master1200'));
    DECK.push(new Card(11, '雨',   'tane',    '燕',       3, '46293776_p1_master1200'));
    DECK.push(new Card(11, '雨',   'kou',     '小野道風', 4, '46293776_p0_master1200'));
    DECK.push(new Card(12, '桐',   'kasu',    'カス',     1, '46294136_p3_master1200'));
    DECK.push(new Card(12, '桐',   'kasu',    'カス',     2, '46294136_p2_master1200'));
    DECK.push(new Card(12, '桐',   'kasu',    'カス',     3, '46294136_p1_master1200'));
    DECK.push(new Card(12, '桐',   'kou',     '鳳凰',     4, '46294136_p0_master1200'));
  }

  function drawCard() {
    var index = Math.floor(Math.random() * DECK.length),
        newCard = DECK[index];
    DECK.splice(index, 1);
    return newCard;
  }

  function fetchAllDeckCard() {
    return DECK;
  }

  initializeDeck()

  self.hanafuda = {
    draw: drawCard,
    fetchAll: fetchAllDeckCard 
  }
    
})(typeof(exports) === "undefined" ? window : exports);
