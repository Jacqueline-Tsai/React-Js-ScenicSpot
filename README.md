
github link : https://github.com/Jacqueline-Tsai/React-Js-ScenicSpot

# Introduction

這個專案包含了兩個部分
1. 
	串接交通部觀光景點 API (MOTC Transport API V2),並使用 React 實作一個瀏覽景點的網站
2.
	Dcard 每天午夜都有大量使用者湧入抽卡，為了不讓伺服器過載，
	請設計一個 middleware：
	限制每小時來自同一個 IP 的請求數量不得超過 1000
	在 response headers 中加入剩餘的請求數量 (X-RateLimit-Remaining) 以及 rate limit 歸零的時間 (X-RateLimit-Reset)
	如果超過限制的話就回傳 429 (Too Many Requests)
	可以使用各種資料庫達成

## Get Start

安裝套件

```sh
npm install
```

啟動 server (port:3000)

```sh
npm run start
```
啟動 client (port:8080)

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
 



