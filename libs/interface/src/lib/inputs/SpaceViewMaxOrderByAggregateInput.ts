import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("SpaceViewMaxOrderByAggregateInput", {
  isAbstract: true
})
export class SpaceViewMaxOrderByAggregateInput {
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
  localId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  spaceId?: "asc" | "desc" | undefined;
}
