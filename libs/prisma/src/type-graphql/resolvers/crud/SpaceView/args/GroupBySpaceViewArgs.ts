import { SpaceViewScalarFieldEnum } from "../../../../enums/SpaceViewScalarFieldEnum";
import { SpaceViewOrderByWithAggregationInput } from "../../../inputs/SpaceViewOrderByWithAggregationInput";
import { SpaceViewScalarWhereWithAggregatesInput } from "../../../inputs/SpaceViewScalarWhereWithAggregatesInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";

@TypeGraphQL.ArgsType()
export class GroupBySpaceViewArgs {
  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;

  @Field(() => [SpaceViewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceViewOrderByWithAggregationInput[] | undefined;

  @Field(() => [SpaceViewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId">;

  @Field(() => SpaceViewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceViewScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
