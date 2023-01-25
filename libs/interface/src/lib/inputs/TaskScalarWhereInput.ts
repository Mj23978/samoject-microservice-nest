import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("TaskScalarWhereInput", {
  isAbstract: true
})
export class TaskScalarWhereInput {
  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  AND?: TaskScalarWhereInput[] | undefined;

  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  OR?: TaskScalarWhereInput[] | undefined;

  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  NOT?: TaskScalarWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  projectId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  creatorId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  details?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;
}
