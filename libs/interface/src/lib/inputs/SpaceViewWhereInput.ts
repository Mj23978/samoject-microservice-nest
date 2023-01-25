import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("SpaceViewWhereInput", {
  isAbstract: true
})
export class SpaceViewWhereInput {
  @Field(() => [SpaceViewWhereInput], {
    nullable: true
  })
  AND?: SpaceViewWhereInput[] | undefined;

  @Field(() => [SpaceViewWhereInput], {
    nullable: true
  })
  OR?: SpaceViewWhereInput[] | undefined;

  @Field(() => [SpaceViewWhereInput], {
    nullable: true
  })
  NOT?: SpaceViewWhereInput[] | undefined;

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
