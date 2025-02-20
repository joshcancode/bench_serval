<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node & bun HTTP frameworks</strong>
  </p>
  <br>
  <p align="center">
    <a alt="Bench" href="https://github.com/denosaurs/bench/actions">
      <img src="https://img.shields.io/github/workflow/status/denosaurs/bench/bench" />
    </a>
  </p>
</div>

# Table of Contents

- [Overview](#overview)
  - [Hello, bench!](#hello-bench)
- [Frameworks](#frameworks)
  - [Hono](#hono)
  - [Hyper Express](#hyper-express)
  - [Hyper Express Deno](#hyper-express-deno)
  - [Mesh](#mesh)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Hono](#hono-1)
    - [Hyper Express](#hyper-express-1)
    - [Hyper Express Deno](#hyper-express-deno-1)
    - [Mesh](#mesh-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Mesh                                                                                 | 80954.98 | 9191.19  | 97816.18 | 100%     |
| Hyper Express                                                                        | 78957.32 | 12147.03 | 99161.12 | 98%      |
| Hono                                                                                 | 50200.86 | 4604.01  | 68504.86 | 62%      |
| Hyper Express Deno                                                                   | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-cce69cf2-5289-4df2-b12b-adb41bb04e35) |          |          |          |          |

# Frameworks

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

## [Hyper Express Deno](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

## [Mesh](https://github.com/ionited/mesh)

A fast web framework based on uWebSocket.js

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50200.86 | 4604.01 | 68504.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46528.68 | 47573.93 | 49116.05 | 52465.56 | 56095.48 | 58384.30 | 62312.77 |
| **Latency** | 738µs    | 912µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 78957.32 | 12147.03 | 99161.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60463.84 | 71476.45 | 81078.31 | 88443.73 | 92543.57 | 94616.04 | 96900.48 |
| **Latency** | 381µs    | 471µs    | 578µs    | 729µs    | 968µs    | 1ms      | 1ms      |

### [Hyper Express Deno](#hyper-express-deno)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Mesh](#mesh)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 80954.98 | 9191.19 | 97816.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67823.48 | 74013.12 | 82049.81 | 88144.84 | 92228.43 | 93684.38 | 96305.81 |
| **Latency** | 373µs    | 464µs    | 578µs    | 725µs    | 914µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2025-02-20T01:06:22.833Z</p>
