import { ChatScalarFieldEnum } from "../../../../enums/ChatScalarFieldEnum";
import { ChatOrderByWithAggregationInput } from "../../../inputs/ChatOrderByWithAggregationInput";
import { ChatScalarWhereWithAggregatesInput } from "../../../inputs/ChatScalarWhereWithAggregatesInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByChatArgs {
  @Field(() => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;

  @Field(() => [ChatOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatOrderByWithAggregationInput[] | undefined;

  @Field(() => [ChatScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @Field(() => ChatScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
