import { Proyecto } from "./mod1.js";

async function xxx() {
  let resp = await Proyecto;
  console.log(resp);
}



/*Sequelize = {
  options: {
    dialect: 'postgres',
    dialectModule: null,
    dialectModulePath: null,
    host: 'localhost',
    protocol: 'tcp',
    define: {},
    query: {},
    sync: {},
    timezone: '+00:00',
    standardConformingStrings: true,
    logging: [Function: log],
    omitNull: false,
    native: false,
    replication: false,
    ssl: undefined,
    pool: {},
    quoteIdentifiers: true,
    hooks: {},
    retry: { max: 5, match: [Array] },
    transactionType: 'DEFERRED',
    isolationLevel: null,
    databaseVersion: 0,
    typeValidation: false,
    benchmark: false,
    minifyAliases: false,
    logQueryParameters: false,
    dialectOptions: [Object: null prototype] = {
      user: 'postgres',
      password: 'admin',
      port: null,
      host: 'localhost',
      database: 'pokemon2'
    }
  },
  config: {
    database: 'pokemon2',
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    pool: {},
    protocol: 'tcp',
    native: false,
    ssl: undefined,
    replication: false,
    dialectModule: null,
    dialectModulePath: null,
    keepDefaultTimezone: undefined,
    dialectOptions: [Object: null prototype] = {
      user: 'postgres',
      password: 'admin',
      port: null,
      host: 'localhost',
      database: 'pokemon2'
    }
  },
  dialect: <ref *2> PostgresDialect {
    sequelize: [Circular *1],
    connectionManager: ConnectionManager = {
      sequelize: [Circular *1],
      config: [Object],
      dialect: [Circular *2],
      versionPromise: null,
      dialectName: 'postgres',
      pool: [Pool],
      lib: [PG],
      nameOidMap: {},
      enumOids: [Object],
      oidParserMap: Map(0) {}
    },
    queryGenerator: PostgresQueryGenerator = {
      sequelize: [Circular *1],
      options: [Object],
      dialect: 'postgres',
      _dialect: [Circular *2],
      _quoteIdentifier: [Function: quoteIdentifier],
      quoteIdentifier: [Function (anonymous)],
      typeValidation: undefined
    },
    queryInterface: PostgresQueryInterface = {
      sequelize: [Circular *1],
      queryGenerator: [PostgresQueryGenerator]
    }
  },
  queryInterface: PostgresQueryInterface = {
    sequelize: [Circular *1],
    queryGenerator: PostgresQueryGenerator = {
      sequelize: [Circular *1],
      options: [Object],
      dialect: 'postgres',
      _dialect: [PostgresDialect],
      _quoteIdentifier: [Function: quoteIdentifier],
      quoteIdentifier: [Function (anonymous)],
      typeValidation: undefined
    }
  },
  models: { Pokemon_Typex: Pokemon_Typex, type: type, pokemon: pokemon },
  modelManager: ModelManager = {
    models: [ Pokemon_Typex, type, pokemon ],
    sequelize: [Circular *1]
  },
  connectionManager: <ref *3> ConnectionManager {
    sequelize: [Circular *1],
    config = {
      database: 'pokemon2',
      username: 'postgres',
      password: 'admin',
      host: 'localhost',
      port: 5432,
      pool: [Object],
      protocol: 'tcp',
      native: false,
      ssl: undefined,
      replication: false,
      dialectModule: null,
      dialectModulePath: null,
      keepDefaultTimezone: undefined,
      dialectOptions: [Object]
    },
    dialect <ref *2> PostgresDialect  {
      sequelize: [Circular *1],
      connectionManager: [Circular *3],
      queryGenerator: [PostgresQueryGenerator],
      queryInterface: [PostgresQueryInterface]
    },
    versionPromise: null,
    dialectName: 'postgres',
    pool: Pool {
      log: false,
      idleTimeoutMillis: 10000,
      acquireTimeoutMillis: 60000,
      reapIntervalMillis: 1000,
      maxUsesPerResource: Infinity,
      _factory: [Object],
      _count: 0,
      _draining: false,
      _pendingAcquires: [],
      _inUseObjects: [],
      _availableObjects: [],
      _removeIdleScheduled: false
    },
    lib: PG {
      defaults: [Object],
      Client: [Function],
      Query: [class Query extends EventEmitter],
      Pool: [class BoundPool extends Pool],
      _pools: [],
      Connection: [class Connection extends EventEmitter],
      types: [Object],
      DatabaseError: [class DatabaseError extends Error]
    },
    nameOidMap: {},
    enumOids: { oids: [], arrayOids: [] },
    oidParserMap: Map(0) {}
  }
}*/