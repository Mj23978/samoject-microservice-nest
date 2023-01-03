import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;
}
