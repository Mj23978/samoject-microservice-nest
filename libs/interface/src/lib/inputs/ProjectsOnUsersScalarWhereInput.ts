import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("ProjectsOnUsersScalarWhereInput", {
  isAbstract: true
})
export class ProjectsOnUsersScalarWhereInput {
  @Field(() => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersScalarWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;
}
