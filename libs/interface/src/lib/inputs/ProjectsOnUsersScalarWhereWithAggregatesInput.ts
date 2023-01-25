import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ProjectsOnUsersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProjectsOnUsersScalarWhereWithAggregatesInput {
  @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  assignedBy?: StringWithAggregatesFilter | undefined;
}
