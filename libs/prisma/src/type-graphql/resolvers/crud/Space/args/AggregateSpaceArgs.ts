import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceOrderByWithRelationInput } from "../../../inputs/SpaceOrderByWithRelationInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpaceArgs {
  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
