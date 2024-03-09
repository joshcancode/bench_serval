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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 81789.16 | 12594.79 | 102318.60 | 100%     |
| Mesh                                                                                 | 79800.70 | 10169.82 | 101353.77 | 98%      |
| Hono                                                                                 | 50758.63 | 4374.71  | 71362.55  | 62%      |
| Hyper Express Deno                                                                   | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-15113069-af11-46e9-ba64-a15c7a4597c0) |          |          |           |          |

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
| 50758.63 | 4374.71 | 71362.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47530.72 | 48715.97 | 49802.26 | 51798.41 | 56809.78 | 58935.26 | 62928.42 |
| **Latency** | 809µs    | 914µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81789.16 | 12594.79 | 102318.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 62428.61 | 75044.45 | 81774.47 | 93139.60 | 97509.92 | 98847.75 | 100606.32 |
| **Latency** | 392µs    | 482µs    | 567µs    | 668µs    | 910µs    | 1ms      | 1ms       |

### [Hyper Express Deno](#hyper-express-deno)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Mesh](#mesh)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79800.70 | 10169.82 | 101353.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66439.82 | 71405.33 | 79640.81 | 87916.82 | 94134.25 | 96438.83 | 99164.53 |
| **Latency** | 373µs    | 464µs    | 588µs    | 743µs    | 936µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2024-03-09T16:50:19.451Z</p>
