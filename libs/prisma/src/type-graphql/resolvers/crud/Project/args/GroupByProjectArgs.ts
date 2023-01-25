import { ProjectScalarFieldEnum } from "../../../../enums/ProjectScalarFieldEnum";
import { ProjectOrderByWithAggregationInput } from "../../../inputs/ProjectOrderByWithAggregationInput";
import { ProjectScalarWhereWithAggregatesInput } from "../../../inputs/ProjectScalarWhereWithAggregatesInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByProjectArgs {
  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @Field(() => [ProjectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectOrderByWithAggregationInput[] | undefined;

  @Field(() => [ProjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "description" | "settingsId" | "workspaceId" | "ownerId" | "chatId">;

  @Field(() => ProjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
