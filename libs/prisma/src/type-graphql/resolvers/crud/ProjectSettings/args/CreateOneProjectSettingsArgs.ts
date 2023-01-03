import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsCreateInput } from "../../../inputs/ProjectSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsCreateInput, {
    nullable: false
  })
  data!: ProjectSettingsCreateInput;
}
