import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsCreateManyInput } from "../../../inputs/ProjectSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectSettingsArgs {
  @TypeGraphQL.Field(_type => [ProjectSettingsCreateManyInput], {
    nullable: false
  })
  data!: ProjectSettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
