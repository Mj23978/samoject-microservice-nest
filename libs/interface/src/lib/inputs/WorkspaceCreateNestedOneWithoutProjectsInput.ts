import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutProjectsInput } from "../inputs/WorkspaceCreateOrConnectWithoutProjectsInput";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateNestedOneWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceCreateNestedOneWithoutProjectsInput {
  @Field(() => WorkspaceCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutProjectsInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;
}
