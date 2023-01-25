import { ChatScalarFieldEnum } from "../../../../enums/ChatScalarFieldEnum";
import { ChatOrderByWithRelationInput } from "../../../inputs/ChatOrderByWithRelationInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstChatArgs {
  @Field(() => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;

  @Field(() => [ChatOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatOrderByWithRelationInput[] | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [ChatScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt"> | undefined;
}
