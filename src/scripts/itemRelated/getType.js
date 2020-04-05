// import itemTypes from '../../lib/items.json
// Hämtas från extern plats egentligen
const possibleitemTypes = [
  {
    bags: [
      {
        type: 'Handbag',
        graphic:
          'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/bag-icon.png',
        score: 30,
      },
      {
        type: 'Sportsbag',
        graphic:
          'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
        score: 50,
      },
      {
        type: 'Briefcase',
        graphic: 'https://www.iconhot.com/icon/png/glossd/512/briefcase-3.png',
        score: 70,
      },
    ],
  },
  {
    clothes: [
      {
        type: 'Hat',
        graphic:
          'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/hat.png',
        score: 60,
      },
      {
        type: 'Jeans',
        graphic:
          'https://cdn3.iconfinder.com/data/icons/fashion-category-color/100/Denim-512.png',
        score: 50,
      },
      {
        type: 'T-shirt',
        graphic:
          'https://iconsgalore.com/wp-content/uploads/2018/10/t-shirt-1-featured.png',
        score: 10,
      },
    ],
  },
  {
    shoes: [
      {
        type: 'Crocs',
        graphic:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: 20,
      },
      {
        type: 'Sandals',
        graphic:
          'https://www.creativefabrica.com/wp-content/uploads/2019/05/Sandals-icon-vector-by-hellopixelzstudio.png',
        score: 20,
      },
      {
        type: 'Sneakers',
        graphic:
          'https://cdn.iconscout.com/icon/premium/png-256-thumb/sneakers-391-457045.png',
        score: 40,
      },
    ],
  },
];

function getItemType(caseTypes) {
  const randomizedIndex =
    Math.floor(Math.random() * Object.keys(caseTypes).length) + 1;
  let randomizedType;
  caseTypes.forEach((type, index) => {
    if (index + 1 == randomizedIndex) {
      randomizedType = type;
    }
  });
  return randomizedType;
}

function getItem(itemType) {
  let possibleItems;
  let randomizedIndex;
  possibleitemTypes.forEach((possibleType) => {
    const typeObj = Object.keys(possibleType)[0];
    if (typeObj === itemType) {
      possibleItems = possibleType[typeObj];
      randomizedIndex = Math.floor(Math.random() * possibleItems.length);
    }
  });
  return possibleItems[randomizedIndex];
}

export default function generateType(caseTypes) {
  const itemType = getItemType(caseTypes);
  const item = getItem(itemType);

  return item;
}
