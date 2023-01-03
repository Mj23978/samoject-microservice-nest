import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceUpdateWithoutSettingsInput } from "../inputs/SpaceUpdateWithoutSettingsInput";

@TypeGraphQL.InputType("SpaceUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutSettingsInput {
  @TypeGraphQL.Field(_type => SpaceUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutSettingsInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSettingsInput;
}
