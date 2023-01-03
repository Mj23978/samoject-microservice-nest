import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewCreateManyInput } from "../../../inputs/SpaceViewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceViewArgs {
  @TypeGraphQL.Field(_type => [SpaceViewCreateManyInput], {
    nullable: false
  })
  data!: SpaceViewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
