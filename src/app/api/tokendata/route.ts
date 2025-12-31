import { NextResponse } from "next/server";
import {
  mockTokens,
  mockFinalStretchTokens,
  mockMigratedTokens,
} from "../../data/mockData";
import { updateToken } from "@/app/lib/mockStream";

// in-memory state (IMPORTANT)
let newPairs = [...mockTokens];
let finalStretch = [...mockFinalStretchTokens];
let migrated = [...mockMigratedTokens];

export async function GET() {
  console.log("API called: /api/route/tokendata");
  newPairs = updateToken(newPairs);
  finalStretch = updateToken(finalStretch);
  migrated = updateToken(migrated);

  return NextResponse.json({
    newPairs,
    finalStretch,
    migrated,
  });
}
