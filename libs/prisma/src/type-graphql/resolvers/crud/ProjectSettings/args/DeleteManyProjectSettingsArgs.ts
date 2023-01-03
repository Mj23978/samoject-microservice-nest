import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;
}
