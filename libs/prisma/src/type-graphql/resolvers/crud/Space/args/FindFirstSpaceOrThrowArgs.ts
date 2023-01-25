import { SpaceScalarFieldEnum } from "../../../../enums/SpaceScalarFieldEnum";
import { SpaceOrderByWithRelationInput } from "../../../inputs/SpaceOrderByWithRelationInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstSpaceOrThrowArgs {
  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;

  @Field(() => [SpaceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceOrderByWithRelationInput[] | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [SpaceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "viewId" | "projectId" | "settingsId" | "spaceType" | "parentId" | "chatId"> | undefined;
}
