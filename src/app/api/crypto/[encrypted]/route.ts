import { decryptText } from "@/utils/crypto/crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const encrypted = req.url.split("crypto/")?.[1];
  return NextResponse.json(decryptText(encrypted));
}
