import { ProjectScalarFieldEnum } from "../../../../enums/ProjectScalarFieldEnum";
import { ProjectOrderByWithRelationInput } from "../../../inputs/ProjectOrderByWithRelationInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";
import { ProjectWhereUniqueInput } from "../../../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserOwnedProjectsArgs {
  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @Field(() => [ProjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectOrderByWithRelationInput[] | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [ProjectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title" | "description" | "settingsId" | "workspaceId" | "ownerId" | "chatId"> | undefined;
}
