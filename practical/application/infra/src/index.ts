import sql from 'mssql';

/**
 * Storage options for composing together with any 'config' module options
 */
export const defaultSqlConfig: sql.config = {
  server: 'localhost',
  password: 'Passw0rd',
  user: 'SA',
  database: 'application',
  options: {
    trustServerCertificate: true // for self signed cert
  }
}

export { mssql } from './db/mssql';
