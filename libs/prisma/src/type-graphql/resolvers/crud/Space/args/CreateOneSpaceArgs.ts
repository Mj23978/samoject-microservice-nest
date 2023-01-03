import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceCreateInput } from "../../../inputs/SpaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceArgs {
  @TypeGraphQL.Field(_type => SpaceCreateInput, {
    nullable: false
  })
  data!: SpaceCreateInput;
}
