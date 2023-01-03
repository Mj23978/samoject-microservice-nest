import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceWhereInput } from "../inputs/SpaceWhereInput";

@TypeGraphQL.InputType("SpaceListRelationFilter", {
  isAbstract: true
})
export class SpaceListRelationFilter {
  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  every?: SpaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  some?: SpaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  none?: SpaceWhereInput | undefined;
}
