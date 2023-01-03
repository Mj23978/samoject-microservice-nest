import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutSettingsInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSettingsInput;
}
