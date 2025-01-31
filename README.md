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
| Mesh                                                                                 | 81961.62 | 9488.95  | 102553.14 | 100%     |
| Hyper Express                                                                        | 76056.10 | 11145.70 | 96767.93  | 93%      |
| Hono                                                                                 | 48840.14 | 4236.20  | 75654.91  | 60%      |
| Hyper Express Deno                                                                   | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-83fc138a-920f-4e59-9573-4263e54075ee) |          |          |           |          |

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
| 48840.14 | 4236.20 | 75654.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46285.17 | 47153.29 | 47943.68 | 49103.15 | 53553.61 | 56485.82 | 65048.86 |
| **Latency** | 849µs    | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 76056.10 | 11145.70 | 96767.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58249.77 | 69923.41 | 77686.33 | 83531.14 | 89254.83 | 91718.32 | 94674.98 |
| **Latency** | 410µs    | 511µs    | 595µs    | 744µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express Deno](#hyper-express-deno)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Mesh](#mesh)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 81961.62 | 9488.95 | 102553.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67900.56 | 75726.57 | 83326.06 | 89251.02 | 93300.73 | 94821.30 | 97433.38 |
| **Latency** | 369µs    | 458µs    | 571µs    | 719µs    | 907µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2025-01-31T01:05:51.281Z</p>
