import { Injectable } from "@nestjs/common";
import { Blog } from "../blog/base/Blog";

@Injectable()
export class PublicContentService {
  constructor() {}
  async Blog(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async Dashboard(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SchoolGeneralInfo(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
