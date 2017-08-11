const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

const Place = db.define( 'place', {
  address: {
    type: Sequelize.STRING,
    notNull: true
  },
  city: {
    type: Sequelize.STRING,
    notNull: true
  },
  state: {
    type: Sequelize.STRING,
    notNull: true
  },
  location: {
    type: Sequelize.ARRAY( Sequelize.FLOAT ),
    notNull: true
  }
} )

const Hotel = db.define( 'hotel', {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      isBetween1And5: ( value ) => {
        if ( value < 1 || value > 5 ) {
          throw new Error('Rating out of range. Must be between 1 and 5.')
        }
      }
    }
  },
  ammenities: {
    type: Sequelize.STRING,
    notNull: true
  }
} )

const Activity = db.define( 'activity', {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  age_range: {
    type: Sequelize.STRING,
    notNull: true
  }
} )

const Restaurant = db.define( 'restaurant', {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  cuisine: {
    type: Sequelize.STRING,
    notNull: true
  },
  price: {
    type: Sequelize.INTEGER,
    notNull: true,
  }
})

Restaurant.hook( 'beforeValidate',
  function ( restaurant ) {
    if ( restaurant.price > 5 ) restaurant.price = 5;
    if ( restaurant.price < 1 ) restaurant.price = 1;
  }
)

// ASSOCIATIONS /////////////////////////////////
Hotel.belongsTo( Place );
Restaurant.belongsTo( Place );
Activity.belongsTo( Place );

module.exports = db;
