import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsCreateInput } from "../../../inputs/SpaceSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsCreateInput, {
    nullable: false
  })
  data!: SpaceSettingsCreateInput;
}
