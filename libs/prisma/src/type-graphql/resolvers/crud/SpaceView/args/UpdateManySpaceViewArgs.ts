import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewUpdateManyMutationInput } from "../../../inputs/SpaceViewUpdateManyMutationInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceViewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;
}
