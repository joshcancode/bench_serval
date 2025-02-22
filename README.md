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
| Mesh                                                                                 | 80310.22 | 9229.02  | 96945.86 | 100%     |
| Hyper Express                                                                        | 77129.70 | 10624.67 | 97801.02 | 96%      |
| Hono                                                                                 | 48526.17 | 3977.31  | 69892.75 | 60%      |
| Hyper Express Deno                                                                   | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e3116fc8-53f8-4585-917b-9b0ebadd31cc) |          |          |          |          |

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
| 48526.17 | 3977.31 | 69892.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46186.08 | 47203.15 | 48007.51 | 49293.35 | 52526.97 | 55255.78 | 60544.60 |
| **Latency** | 874µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 77129.70 | 10624.67 | 97801.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59778.13 | 72410.74 | 78610.35 | 83605.81 | 89917.20 | 92821.85 | 96094.96 |
| **Latency** | 416µs    | 514µs    | 588µs    | 717µs    | 983µs    | 1ms      | 1ms      |

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
| 80310.22 | 9229.02 | 96945.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66334.29 | 73951.36 | 81632.97 | 87612.34 | 91347.82 | 93321.02 | 95550.49 |
| **Latency** | 377µs    | 468µs    | 583µs    | 734µs    | 921µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2025-02-22T01:03:46.935Z</p>
