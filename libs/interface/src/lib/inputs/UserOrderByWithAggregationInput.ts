import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";

@InputType("UserOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  firstname?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  lastname?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @Field(() => UserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserCountOrderByAggregateInput | undefined;

  @Field(() => UserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @Field(() => UserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserMinOrderByAggregateInput | undefined;
}
