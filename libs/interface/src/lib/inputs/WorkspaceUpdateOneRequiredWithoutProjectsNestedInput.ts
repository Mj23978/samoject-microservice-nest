import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutProjectsInput } from "../inputs/WorkspaceCreateOrConnectWithoutProjectsInput";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceUpdateWithoutProjectsInput } from "../inputs/WorkspaceUpdateWithoutProjectsInput";
import { WorkspaceUpsertWithoutProjectsInput } from "../inputs/WorkspaceUpsertWithoutProjectsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceUpdateOneRequiredWithoutProjectsNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneRequiredWithoutProjectsNestedInput {
  @Field(() => WorkspaceCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutProjectsInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput | undefined;

  @Field(() => WorkspaceUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutProjectsInput | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @Field(() => WorkspaceUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutProjectsInput | undefined;
}
