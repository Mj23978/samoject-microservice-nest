import { MessageScalarFieldEnum } from "../../../../enums/MessageScalarFieldEnum";
import { MessageOrderByWithAggregationInput } from "../../../inputs/MessageOrderByWithAggregationInput";
import { MessageScalarWhereWithAggregatesInput } from "../../../inputs/MessageScalarWhereWithAggregatesInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMessageArgs {
  @Field(() => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;

  @Field(() => [MessageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MessageOrderByWithAggregationInput[] | undefined;

  @Field(() => [MessageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "content" | "contentType" | "type" | "senderId" | "parentId" | "chatId">;

  @Field(() => MessageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MessageScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
