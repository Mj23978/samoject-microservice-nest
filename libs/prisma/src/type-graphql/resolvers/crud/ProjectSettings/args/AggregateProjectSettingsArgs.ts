import { ProjectSettingsOrderByWithRelationInput } from "../../../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectSettingsArgs {
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
}
