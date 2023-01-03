import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSpaceOrThrowArgs {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;
}
