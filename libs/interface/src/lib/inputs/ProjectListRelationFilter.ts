import { Field, InputType } from "@nestjs/graphql";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@InputType("ProjectListRelationFilter", {
  isAbstract: true
})
export class ProjectListRelationFilter {
  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  every?: ProjectWhereInput | undefined;

  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  some?: ProjectWhereInput | undefined;

  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  none?: ProjectWhereInput | undefined;
}
