import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProjectsOnUsersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProjectsOnUsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  assignedBy?: StringWithAggregatesFilter | undefined;
}
