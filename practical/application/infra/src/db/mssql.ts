import sql from 'mssql';

export class mssql {
    private _connection: sql.ConnectionPool | null = null;

    public async getConnection(config: sql.config): Promise<sql.ConnectionPool> {
        this._connection = await this.createConnection(config);
        return this._connection;
    }

    private async createConnection(config: sql.config,): Promise<sql.ConnectionPool> {
        try {
            // retry logic would be good here!!
            return await sql.connect(config);
        } catch (e) {
            if (e instanceof sql.ConnectionError) {
                console.error(`${e.message}`);
            }

            throw e;
        }
    }
}
