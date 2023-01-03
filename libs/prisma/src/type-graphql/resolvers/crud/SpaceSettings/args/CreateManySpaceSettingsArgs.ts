import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsCreateManyInput } from "../../../inputs/SpaceSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceSettingsArgs {
  @TypeGraphQL.Field(_type => [SpaceSettingsCreateManyInput], {
    nullable: false
  })
  data!: SpaceSettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
