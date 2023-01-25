import { ProjectSettingsScalarFieldEnum } from "../../../../enums/ProjectSettingsScalarFieldEnum";
import { ProjectSettingsOrderByWithAggregationInput } from "../../../inputs/ProjectSettingsOrderByWithAggregationInput";
import { ProjectSettingsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectSettingsScalarWhereWithAggregatesInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByProjectSettingsArgs {
  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;

  @Field(() => [ProjectSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectSettingsOrderByWithAggregationInput[] | undefined;

  @Field(() => [ProjectSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "projectId">;

  @Field(() => ProjectSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectSettingsScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
