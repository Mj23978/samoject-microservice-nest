import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceArgs {
  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;
}
