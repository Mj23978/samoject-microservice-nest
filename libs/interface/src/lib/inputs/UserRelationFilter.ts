import { Field, InputType } from "@nestjs/graphql";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserRelationFilter", {
  isAbstract: true
})
export class UserRelationFilter {
  @Field(() => UserWhereInput, {
    nullable: true
  })
  is?: UserWhereInput | undefined;

  @Field(() => UserWhereInput, {
    nullable: true
  })
  isNot?: UserWhereInput | undefined;
}
