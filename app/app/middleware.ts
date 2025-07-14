import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Request URL:', request.url);
  return NextResponse.next();
}

// Optionally, specify config for matching routes
// export const config = {
//   matcher: ['/api/:path*', '/account/:path*', '/relay/:path*'],
// }; 