import { SpaceViewScalarFieldEnum } from "../../../../enums/SpaceViewScalarFieldEnum";
import { SpaceViewOrderByWithRelationInput } from "../../../inputs/SpaceViewOrderByWithRelationInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstSpaceViewOrThrowArgs {
  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;

  @Field(() => [SpaceViewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceViewOrderByWithRelationInput[] | undefined;

  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceViewWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [SpaceViewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId"> | undefined;
}
