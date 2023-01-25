import { SpaceScalarFieldEnum } from "../../../../enums/SpaceScalarFieldEnum";
import { SpaceOrderByWithAggregationInput } from "../../../inputs/SpaceOrderByWithAggregationInput";
import { SpaceScalarWhereWithAggregatesInput } from "../../../inputs/SpaceScalarWhereWithAggregatesInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";

@TypeGraphQL.ArgsType()
export class GroupBySpaceArgs {
  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;

  @Field(() => [SpaceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceOrderByWithAggregationInput[] | undefined;

  @Field(() => [SpaceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "viewId" | "projectId" | "settingsId" | "spaceType" | "parentId" | "chatId">;

  @Field(() => SpaceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
