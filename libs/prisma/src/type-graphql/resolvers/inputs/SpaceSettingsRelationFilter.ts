import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsWhereInput } from "../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.InputType("SpaceSettingsRelationFilter", {
  isAbstract: true
})
export class SpaceSettingsRelationFilter {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  is?: SpaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  isNot?: SpaceSettingsWhereInput | undefined;
}
