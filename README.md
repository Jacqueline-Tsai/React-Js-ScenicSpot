# Scenic Spots Lookup Tool

## Introduction

This project includes two parts

1. Connect scene spots API from Ministry of Transportation And Communications (MOTC Transport API V2), implementing a interface for these data using React.

3. Designed a middleware that limit the number of requests from a single IP to 1000. If the user is exceed the limit, return 429 (Too Many Requests)
 
## Get Start

Install packages

```sh
npm install
```

Activate server (port:3000)

```sh
npm run start
```
Activate client (port:8080)

```sh
npm run dev
```

## Struture

```
├── README.md                            
├── package.json 
├── package-lock.json
├── tsconfig
├── index.html
│
├── src
│   │
│   ├── App.tsx
│   │
│   ├── scenicSpot
│   │     ├── all
│   │     ├── city
│   │     ├── Intro
│   │     ├── Navbar	
│   │     └── scrollHandler
│   │
│   └── view
│         └── rateLimitTest
│
└── server
    │
    ├── index.js
    │
    ├── model
    │     └── reqNum
    │
    └── config/db
 



