import { Module } from "@nestjs/common";
import { PublicContentService } from "./publiccontent.service";
import { PublicContentController } from "./publiccontent.controller";
import { PublicContentResolver } from "./publiccontent.resolver";

@Module({
  controllers: [PublicContentController],
  providers: [PublicContentService, PublicContentResolver],
  exports: [PublicContentService],
})
export class PublicContentModule {}
