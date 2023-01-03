import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewCreateInput } from "../../../inputs/SpaceViewCreateInput";
import { SpaceViewUpdateInput } from "../../../inputs/SpaceViewUpdateInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceViewCreateInput, {
    nullable: false
  })
  create!: SpaceViewCreateInput;

  @TypeGraphQL.Field(_type => SpaceViewUpdateInput, {
    nullable: false
  })
  update!: SpaceViewUpdateInput;
}
