import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectsOnUsersOrderByRelationAggregateInput", {
  isAbstract: true
})
export class ProjectsOnUsersOrderByRelationAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
