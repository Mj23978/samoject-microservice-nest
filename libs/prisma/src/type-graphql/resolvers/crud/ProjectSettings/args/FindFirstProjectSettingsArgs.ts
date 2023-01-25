import { ProjectSettingsScalarFieldEnum } from "../../../../enums/ProjectSettingsScalarFieldEnum";
import { ProjectSettingsOrderByWithRelationInput } from "../../../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstProjectSettingsArgs {
  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;

  @Field(() => [ProjectSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectSettingsOrderByWithRelationInput[] | undefined;

  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectSettingsWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [ProjectSettingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "localId" | "projectId"> | undefined;
}
