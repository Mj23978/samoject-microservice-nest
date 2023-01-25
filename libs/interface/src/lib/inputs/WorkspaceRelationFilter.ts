import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceWhereInput } from "../inputs/WorkspaceWhereInput";

@InputType("WorkspaceRelationFilter", {
  isAbstract: true
})
export class WorkspaceRelationFilter {
  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  is?: WorkspaceWhereInput | undefined;

  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  isNot?: WorkspaceWhereInput | undefined;
}
