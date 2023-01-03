import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsOrderByWithRelationInput } from "../../../inputs/SpaceSettingsOrderByWithRelationInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";
import { SpaceSettingsScalarFieldEnum } from "../../../../enums/SpaceSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId"> | undefined;
}
