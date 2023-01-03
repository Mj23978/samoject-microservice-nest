import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceUpdateManyMutationInput } from "../../../inputs/SpaceUpdateManyMutationInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceArgs {
  @TypeGraphQL.Field(_type => SpaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;
}
