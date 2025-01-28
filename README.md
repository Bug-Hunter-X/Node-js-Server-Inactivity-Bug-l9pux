# Node.js Server Inactivity Bug

This repository demonstrates a bug where a Node.js HTTP server stops responding to requests after a period of inactivity.  The server starts successfully, but after a while, it fails to accept new connections. This can be due to various reasons, including keep-alive connections not being handled correctly, or other resource leaks.

## Bug Report

The `server.js` file contains the buggy code. The server starts listening on port 8080.  After running the server for a while without any requests, attempting to make requests to it will fail.

## Solution

The `serverFixed.js` file provides a corrected version of the server that addresses the issue.  The solution may involve changing keep-alive settings, closing connections explicitly, or addressing other potential resource leaks. 

## How to Reproduce

1. Clone the repository.
2. Run `node server.js`.
3. Wait for some time (several minutes) without sending requests.
4. Try to access the server using a tool like `curl` or a web browser.  The request will likely fail or time out.
5. Run `node serverFixed.js`. Verify that the server responds properly.