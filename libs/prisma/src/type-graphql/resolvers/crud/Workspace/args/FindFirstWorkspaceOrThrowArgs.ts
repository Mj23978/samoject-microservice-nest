import { WorkspaceScalarFieldEnum } from "../../../../enums/WorkspaceScalarFieldEnum";
import { WorkspaceOrderByWithRelationInput } from "../../../inputs/WorkspaceOrderByWithRelationInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstWorkspaceOrThrowArgs {
  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  where?: WorkspaceWhereInput | undefined;

  @Field(() => [WorkspaceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkspaceOrderByWithRelationInput[] | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkspaceWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [WorkspaceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title" | "settingsId" | "userId"> | undefined;
}
