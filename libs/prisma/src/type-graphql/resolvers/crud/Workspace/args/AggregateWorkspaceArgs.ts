import { WorkspaceOrderByWithRelationInput } from "../../../inputs/WorkspaceOrderByWithRelationInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWorkspaceArgs {
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
}
