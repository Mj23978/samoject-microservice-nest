import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutUserInput {
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @Field(() => WorkspaceCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutUserInput;
}
