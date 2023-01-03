import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsCreateManyInput } from "../../../inputs/WorkspaceSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => [WorkspaceSettingsCreateManyInput], {
    nullable: false
  })
  data!: WorkspaceSettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
