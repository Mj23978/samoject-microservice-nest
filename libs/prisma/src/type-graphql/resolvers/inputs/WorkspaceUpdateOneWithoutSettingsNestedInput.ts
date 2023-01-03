import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateOrConnectWithoutSettingsInput } from "../inputs/WorkspaceCreateOrConnectWithoutSettingsInput";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceUpdateWithoutSettingsInput } from "../inputs/WorkspaceUpdateWithoutSettingsInput";
import { WorkspaceUpsertWithoutSettingsInput } from "../inputs/WorkspaceUpsertWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneWithoutSettingsNestedInput {
  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutSettingsInput | undefined;
}
