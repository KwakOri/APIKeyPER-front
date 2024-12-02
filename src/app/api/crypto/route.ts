"use strict";

import { encryptText } from "@/utils/crypto/crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  return NextResponse.json(encryptText(text));
}
