import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("ProjectScalarWhereInput", {
  isAbstract: true
})
export class ProjectScalarWhereInput {
  @Field(() => [ProjectScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectScalarWhereInput[] | undefined;

  @Field(() => [ProjectScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectScalarWhereInput[] | undefined;

  @Field(() => [ProjectScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectScalarWhereInput[] | undefined;

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

  @Field(() => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  workspaceId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;
}
