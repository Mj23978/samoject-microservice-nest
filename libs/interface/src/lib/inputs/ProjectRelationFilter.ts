import { Field, InputType } from "@nestjs/graphql";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@InputType("ProjectRelationFilter", {
  isAbstract: true
})
export class ProjectRelationFilter {
  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  is?: ProjectWhereInput | undefined;

  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  isNot?: ProjectWhereInput | undefined;
}
