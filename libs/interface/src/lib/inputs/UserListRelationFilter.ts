import { Field, InputType } from "@nestjs/graphql";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserListRelationFilter", {
  isAbstract: true
})
export class UserListRelationFilter {
  @Field(() => UserWhereInput, {
    nullable: true
  })
  every?: UserWhereInput | undefined;

  @Field(() => UserWhereInput, {
    nullable: true
  })
  some?: UserWhereInput | undefined;

  @Field(() => UserWhereInput, {
    nullable: true
  })
  none?: UserWhereInput | undefined;
}
