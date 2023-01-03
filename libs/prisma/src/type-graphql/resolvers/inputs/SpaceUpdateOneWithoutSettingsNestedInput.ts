import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutSettingsInput } from "../inputs/SpaceCreateOrConnectWithoutSettingsInput";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceUpdateWithoutSettingsInput } from "../inputs/SpaceUpdateWithoutSettingsInput";
import { SpaceUpsertWithoutSettingsInput } from "../inputs/SpaceUpsertWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutSettingsNestedInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutSettingsInput | undefined;
}
