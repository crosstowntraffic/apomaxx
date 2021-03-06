module.exports = {
  tn: 'film',
  columns: [{
      cn: 'film_id',
      type: 'integer',
      dt: 'smallint',
      rqd: true,
      un: true,
      pk: true,
      ai: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'title',
      type: 'string',
      dt: 'varchar',
      rqd: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'description',
      type: 'text',
      dt: 'text',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'release_year',
      type: 'year',
      dt: 'year',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'language_id',
      type: 'integer',
      dt: 'tinyint',
      rqd: true,
      un: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'original_language_id',
      type: 'integer',
      dt: 'tinyint',
      un: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'rental_duration',
      type: 'integer',
      dt: 'tinyint',
      rqd: true,
      default: "3",
      un: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'rental_rate',
      type: 'decimal',
      dt: 'decimal',
      rqd: true,
      default: "4.99",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'length',
      type: 'integer',
      dt: 'smallint',
      un: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'replacement_cost',
      type: 'decimal',
      dt: 'decimal',
      rqd: true,
      default: "19.99",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'rating',
      type: 'enum',
      dt: 'enum',
      default: "G",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'special_features',
      type: 'set',
      dt: 'set',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      cn: 'last_update',
      type: 'timestamp',
      dt: 'timestamp',
      rqd: true,
      default: "CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "cstn": "fk_film_actor_film",
    "tn": "film_actor",
    "cn": "film_id",
    "puc": 1,
    "rtn": "film",
    "rcn": "film_id",
    "mo": "NONE",
    "UR": "CASCADE",
    "dr": "RESTRICT",
    "ts": "sakila"
  }, {
    "cstn": "fk_film_category_film",
    "tn": "film_category",
    "cn": "film_id",
    "puc": 1,
    "rtn": "film",
    "rcn": "film_id",
    "mo": "NONE",
    "UR": "CASCADE",
    "dr": "RESTRICT",
    "ts": "sakila"
  }, {
    "cstn": "fk_inventory_film",
    "tn": "inventory",
    "cn": "film_id",
    "puc": 1,
    "rtn": "film",
    "rcn": "film_id",
    "mo": "NONE",
    "UR": "CASCADE",
    "dr": "RESTRICT",
    "ts": "sakila"
  }],
  belongsTo: [{
    "cstn": "fk_film_language",
    "tn": "film",
    "cn": "language_id",
    "puc": 1,
    "rtn": "language",
    "rcn": "language_id",
    "mo": "NONE",
    "UR": "CASCADE",
    "dr": "RESTRICT",
    "ts": "sakila"
  }, {
    "cstn": "fk_film_language_original",
    "tn": "film",
    "cn": "original_language_id",
    "puc": 1,
    "rtn": "language",
    "rcn": "language_id",
    "mo": "NONE",
    "UR": "CASCADE",
    "dr": "RESTRICT",
    "ts": "sakila"
  }]
}