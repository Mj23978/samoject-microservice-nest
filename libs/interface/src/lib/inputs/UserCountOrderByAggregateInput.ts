import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("UserCountOrderByAggregateInput", {
  isAbstract: true
})
export class UserCountOrderByAggregateInput {
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
}
