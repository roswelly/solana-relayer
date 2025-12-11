# Solana Relayer Monorepo

This monorepo contains a Solana Anchor program and a Next.js web frontend for interacting with it, managed by Nx.


## Contacts
-telegram [@caterpillardev](https://t.me/roswellecho)
-twitter [@caterpillardev](https://x.com/roswellyecho)


## Projects

- **anchor/**: Solana smart contract (Anchor 0.30+), TypeScript SDK, and tests.
- **web/**: Next.js 14+ frontend (App Router), React 18, Tailwind CSS.

## Technologies
- [Solana](https://solana.com/) / [Anchor](https://book.anchor-lang.com/)
- [Next.js](https://nextjs.org/) 14+
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/)
- [Nx](https://nx.dev/) Monorepo

## Getting Started

### Install dependencies
```sh
npm install
```

### Build and test Anchor program
```sh
npm run anchor-build
npm run anchor-test
```

### Run local Solana validator
```sh
npm run anchor-localnet
```

### Start the web frontend
```sh
npm run dev
```

## Project Structure

- `anchor/` - Solana program, SDK, and tests
- `web/` - Next.js frontend
- `dist/` - Build outputs

## Deployment
- Frontend: [Vercel](https://vercel.com/)
- Solana program: Deployed via Anchor CLI

## License
MIT
