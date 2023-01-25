import { MessageScalarFieldEnum } from "../../../../enums/MessageScalarFieldEnum";
import { MessageOrderByWithRelationInput } from "../../../inputs/MessageOrderByWithRelationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstMessageOrThrowArgs {
  @Field(() => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;

  @Field(() => [MessageOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MessageOrderByWithRelationInput[] | undefined;

  @Field(() => MessageWhereUniqueInput, {
    nullable: true
  })
  cursor?: MessageWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [MessageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "content" | "contentType" | "type" | "senderId" | "parentId" | "chatId"> | undefined;
}
