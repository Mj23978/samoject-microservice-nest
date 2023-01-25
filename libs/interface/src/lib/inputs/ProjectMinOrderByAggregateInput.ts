import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("ProjectMinOrderByAggregateInput", {
  isAbstract: true
})
export class ProjectMinOrderByAggregateInput {
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
  title?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  workspaceId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;
}
