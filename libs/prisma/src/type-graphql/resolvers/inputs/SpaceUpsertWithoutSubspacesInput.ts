import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceUpdateWithoutSubspacesInput } from "../inputs/SpaceUpdateWithoutSubspacesInput";

@TypeGraphQL.InputType("SpaceUpsertWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutSubspacesInput {
  @TypeGraphQL.Field(_type => SpaceUpdateWithoutSubspacesInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutSubspacesInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutSubspacesInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSubspacesInput;
}
