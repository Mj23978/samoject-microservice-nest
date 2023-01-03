import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewWhereInput } from "../inputs/SpaceViewWhereInput";

@TypeGraphQL.InputType("SpaceViewRelationFilter", {
  isAbstract: true
})
export class SpaceViewRelationFilter {
  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  is?: SpaceViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  isNot?: SpaceViewWhereInput | undefined;
}
