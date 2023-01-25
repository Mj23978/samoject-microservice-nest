import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("SpaceSettingsWhereInput", {
  isAbstract: true
})
export class SpaceSettingsWhereInput {
  @Field(() => [SpaceSettingsWhereInput], {
    nullable: true
  })
  AND?: SpaceSettingsWhereInput[] | undefined;

  @Field(() => [SpaceSettingsWhereInput], {
    nullable: true
  })
  OR?: SpaceSettingsWhereInput[] | undefined;

  @Field(() => [SpaceSettingsWhereInput], {
    nullable: true
  })
  NOT?: SpaceSettingsWhereInput[] | undefined;

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
  localId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  spaceId?: StringFilter | undefined;

  @Field(() => SpaceRelationFilter, {
    nullable: true
  })
  space?: SpaceRelationFilter | undefined;
}
