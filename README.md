# price-api

A small Express API for asset prices.

## Run

```sh
npm start
```

The server listens on port `3000` by default. Set `PORT` to use another port.

## Endpoint

`GET /price` returns a fixed price of `$1.00`:

```sh
curl http://localhost:3000/price
```