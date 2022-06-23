import { NextApiResponse } from "next";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, evt: NextFetchEvent) => {
  let response = NextResponse.next();
  // console.log(response.body);
  return response;
};
