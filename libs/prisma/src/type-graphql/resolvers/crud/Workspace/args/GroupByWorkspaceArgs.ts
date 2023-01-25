import { WorkspaceScalarFieldEnum } from "../../../../enums/WorkspaceScalarFieldEnum";
import { WorkspaceOrderByWithAggregationInput } from "../../../inputs/WorkspaceOrderByWithAggregationInput";
import { WorkspaceScalarWhereWithAggregatesInput } from "../../../inputs/WorkspaceScalarWhereWithAggregatesInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByWorkspaceArgs {
  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  where?: WorkspaceWhereInput | undefined;

  @Field(() => [WorkspaceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WorkspaceOrderByWithAggregationInput[] | undefined;

  @Field(() => [WorkspaceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "settingsId" | "userId">;

  @Field(() => WorkspaceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkspaceScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
