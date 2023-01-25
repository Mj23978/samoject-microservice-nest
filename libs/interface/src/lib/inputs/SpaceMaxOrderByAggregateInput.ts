import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("SpaceMaxOrderByAggregateInput", {
  isAbstract: true
})
export class SpaceMaxOrderByAggregateInput {
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
  viewId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  spaceType?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;
}
