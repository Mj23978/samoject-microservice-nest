import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsUpdateManyMutationInput } from "../../../inputs/SpaceSettingsUpdateManyMutationInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceSettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;
}
