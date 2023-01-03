import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectSettingsOrThrowArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;
}
