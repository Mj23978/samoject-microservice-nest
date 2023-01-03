import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceCreateInput } from "../../../inputs/SpaceCreateInput";
import { SpaceUpdateInput } from "../../../inputs/SpaceUpdateInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceArgs {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateInput, {
    nullable: false
  })
  create!: SpaceCreateInput;

  @TypeGraphQL.Field(_type => SpaceUpdateInput, {
    nullable: false
  })
  update!: SpaceUpdateInput;
}
