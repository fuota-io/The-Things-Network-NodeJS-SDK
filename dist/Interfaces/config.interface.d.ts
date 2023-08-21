export interface ApiConnectionOptions {
    url: string;
    method: string;
    headers: {
        AUTHORIZATION: string;
    };
    data: any;
}
export interface Config {
    IDENTITY_SERVER: string;
    API_KEY: string;
    NETWORK_SERVER: string;
    APPLICATION_SERVER: string;
    JOIN_SERVER: string;
    TENANT_ID?: string;
}
