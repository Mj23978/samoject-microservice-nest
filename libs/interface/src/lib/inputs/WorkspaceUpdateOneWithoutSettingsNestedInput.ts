import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutSettingsInput } from "../inputs/WorkspaceCreateOrConnectWithoutSettingsInput";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceUpdateWithoutSettingsInput } from "../inputs/WorkspaceUpdateWithoutSettingsInput";
import { WorkspaceUpsertWithoutSettingsInput } from "../inputs/WorkspaceUpsertWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneWithoutSettingsNestedInput {
  @Field(() => WorkspaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutSettingsInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => WorkspaceUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutSettingsInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @Field(() => WorkspaceUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutSettingsInput | undefined;
}
