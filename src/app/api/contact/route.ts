import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log('Gelen iletişim formu:', body)

  // Şimdilik sadece terminale yazdırıyoruz, burada DB veya mail tetiklenebilir

  return NextResponse.json({ success: true })
}
