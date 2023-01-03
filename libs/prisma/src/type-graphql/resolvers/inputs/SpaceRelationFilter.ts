import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceWhereInput } from "../inputs/SpaceWhereInput";

@TypeGraphQL.InputType("SpaceRelationFilter", {
  isAbstract: true
})
export class SpaceRelationFilter {
  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  is?: SpaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  isNot?: SpaceWhereInput | undefined;
}
