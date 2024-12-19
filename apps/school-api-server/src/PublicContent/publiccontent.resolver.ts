import * as graphql from "@nestjs/graphql";
import { Blog } from "../blog/base/Blog";
import { PublicContentService } from "./publiccontent.service";

export class PublicContentResolver {
  constructor(protected readonly service: PublicContentService) {}

  @graphql.Query(() => String)
  async Blog(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Blog(args);
  }

  @graphql.Query(() => String)
  async Dashboard(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Dashboard(args);
  }

  @graphql.Query(() => String)
  async SchoolGeneralInfo(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SchoolGeneralInfo(args);
  }
}
