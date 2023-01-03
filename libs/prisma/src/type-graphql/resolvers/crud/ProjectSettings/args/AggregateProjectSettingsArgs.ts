import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsOrderByWithRelationInput } from "../../../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
