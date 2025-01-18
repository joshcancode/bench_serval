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
| Mesh                                                                                 | 81812.93 | 9485.69  | 99020.30 | 100%     |
| Hyper Express                                                                        | 77209.12 | 12388.32 | 97600.45 | 94%      |
| Hono                                                                                 | 48050.84 | 3719.44  | 64787.36 | 59%      |
| Hyper Express Deno                                                                   | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b9ff9b61-7741-455b-8b36-295c27ead699) |          |          |          |          |

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
| 48050.84 | 3719.44 | 64787.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45453.18 | 46516.23 | 47613.77 | 48919.99 | 52504.17 | 54511.74 | 58571.01 |
| **Latency** | 873µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 77209.12 | 12388.32 | 97600.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57307.99 | 69532.78 | 79955.88 | 87048.31 | 91037.50 | 92607.41 | 95399.33 |
| **Latency** | 382µs    | 475µs    | 591µs    | 765µs    | 981µs    | 1ms      | 1ms      |

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
| 81812.93 | 9485.69 | 99020.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68036.35 | 75139.22 | 83408.53 | 89173.56 | 92669.10 | 94277.29 | 96253.46 |
| **Latency** | 369µs    | 459µs    | 572µs    | 719µs    | 908µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2025-01-18T01:03:47.037Z</p>
