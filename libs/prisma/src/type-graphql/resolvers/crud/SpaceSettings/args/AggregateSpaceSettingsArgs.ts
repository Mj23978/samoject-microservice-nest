import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsOrderByWithRelationInput } from "../../../inputs/SpaceSettingsOrderByWithRelationInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
