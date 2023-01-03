import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceUpdateInput } from "../../../inputs/SpaceUpdateInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceArgs {
  @TypeGraphQL.Field(_type => SpaceUpdateInput, {
    nullable: false
  })
  data!: SpaceUpdateInput;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;
}
