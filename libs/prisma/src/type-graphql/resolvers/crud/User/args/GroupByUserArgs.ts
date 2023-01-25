import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByUserArgs {
  @Field(() => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(() => [UserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @Field(() => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "email" | "password" | "firstname" | "lastname" | "username" | "active" | "chatId" | "role">;

  @Field(() => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
