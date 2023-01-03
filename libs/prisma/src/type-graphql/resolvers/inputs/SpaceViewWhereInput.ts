import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpaceViewWhereInput", {
  isAbstract: true
})
export class SpaceViewWhereInput {
  @TypeGraphQL.Field(_type => [SpaceViewWhereInput], {
    nullable: true
  })
  AND?: SpaceViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceViewWhereInput], {
    nullable: true
  })
  OR?: SpaceViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceViewWhereInput], {
    nullable: true
  })
  NOT?: SpaceViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  localId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  spaceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceRelationFilter, {
    nullable: true
  })
  space?: SpaceRelationFilter | undefined;
}
