import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("SpaceScalarWhereInput", {
  isAbstract: true
})
export class SpaceScalarWhereInput {
  @Field(() => [SpaceScalarWhereInput], {
    nullable: true
  })
  AND?: SpaceScalarWhereInput[] | undefined;

  @Field(() => [SpaceScalarWhereInput], {
    nullable: true
  })
  OR?: SpaceScalarWhereInput[] | undefined;

  @Field(() => [SpaceScalarWhereInput], {
    nullable: true
  })
  NOT?: SpaceScalarWhereInput[] | undefined;

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
  viewId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  spaceType?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;
}
