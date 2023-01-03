import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceCreateManyInput } from "../../../inputs/SpaceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceArgs {
  @TypeGraphQL.Field(_type => [SpaceCreateManyInput], {
    nullable: false
  })
  data!: SpaceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
