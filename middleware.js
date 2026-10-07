import { NextResponse } from 'next/server';

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  // Set the current full URL into a custom header
  requestHeaders.set('x-url', request.url); 

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}