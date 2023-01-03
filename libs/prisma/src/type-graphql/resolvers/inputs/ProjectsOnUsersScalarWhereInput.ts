import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProjectsOnUsersScalarWhereInput", {
  isAbstract: true
})
export class ProjectsOnUsersScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;
}
