import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutSettingsInput } from "../inputs/SpaceCreateOrConnectWithoutSettingsInput";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
