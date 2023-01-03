import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;
}
