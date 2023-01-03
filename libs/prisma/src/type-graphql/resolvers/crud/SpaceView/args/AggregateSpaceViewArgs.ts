import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewOrderByWithRelationInput } from "../../../inputs/SpaceViewOrderByWithRelationInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceViewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceViewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceViewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
