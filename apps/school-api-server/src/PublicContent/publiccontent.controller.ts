import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PublicContentService } from "./publiccontent.service";
import { Blog } from "../blog/base/Blog";

@swagger.ApiTags("publicContents")
@common.Controller("publicContents")
export class PublicContentController {
  constructor(protected readonly service: PublicContentService) {}

  @common.Get("/blog")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Blog(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Blog(body);
      }

  @common.Get("/dashboard")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Dashboard(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Dashboard(body);
      }

  @common.Get("/school-info")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SchoolGeneralInfo(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SchoolGeneralInfo(body);
      }
}
