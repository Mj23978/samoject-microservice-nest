import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutProjectsInput {
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @Field(() => WorkspaceCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutProjectsInput;
}
