import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewUpdateInput } from "../../../inputs/SpaceViewUpdateInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewUpdateInput, {
    nullable: false
  })
  data!: SpaceViewUpdateInput;

  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;
}
