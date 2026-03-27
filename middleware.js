import { NextResponse } from 'next/server'

export function middleware(request) {
  const requestHeaders = new Headers(request.headers)
  // Store the full URL in a custom header
  requestHeaders.set('x-url', request.url)
	requestHeaders.set('x-pathname', request.nextUrl.pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}