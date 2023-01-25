import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { SpaceOrderByWithRelationInput } from "../inputs/SpaceOrderByWithRelationInput";

@InputType("SpaceSettingsOrderByWithRelationInput", {
  isAbstract: true
})
export class SpaceSettingsOrderByWithRelationInput {
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

  @Field(() => SpaceOrderByWithRelationInput, {
    nullable: true
  })
  space?: SpaceOrderByWithRelationInput | undefined;
}
