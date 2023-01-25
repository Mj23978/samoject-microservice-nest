import { Field, InputType } from "@nestjs/graphql";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("UserScalarWhereInput", {
  isAbstract: true
})
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], {
    nullable: true
  })
  AND?: UserScalarWhereInput[] | undefined;

  @Field(() => [UserScalarWhereInput], {
    nullable: true
  })
  OR?: UserScalarWhereInput[] | undefined;

  @Field(() => [UserScalarWhereInput], {
    nullable: true
  })
  NOT?: UserScalarWhereInput[] | undefined;

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
  email?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  firstname?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  lastname?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @Field(() => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @Field(() => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;
}
