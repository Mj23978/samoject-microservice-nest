import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewCreateInput } from "../../../inputs/SpaceViewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewCreateInput, {
    nullable: false
  })
  data!: SpaceViewCreateInput;
}
