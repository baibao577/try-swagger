import { Get, Route, Query, Path, Post, Body } from "tsoa";
import { PingReq } from "../interface";

interface PingResponse {
  message: string;
  legs?: string;
}

@Route("ping")
export default class PingController {

  // public async getText(folderId: string, fileId: string): Promise<PingResponse> {
  //   return {
  //     message: "GET pong",
  //   };
  // }

  @Get("/heyknot/{folderId}")
  public async getText(
    @Path() folderId: string
  , @Query() fileId: string)
  : Promise<PingResponse> {
    return {
      message: "GET pong",
    };
  }

  @Post()
  public async getMessage(@Body() folderId: PingReq): Promise<PingResponse> {
    return {
      message: "POST pong",
    };
  }
}
