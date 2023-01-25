import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceCreateNestedOneWithoutUserInput {
  @Field(() => WorkspaceCreateWithoutUserInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutUserInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;
}
