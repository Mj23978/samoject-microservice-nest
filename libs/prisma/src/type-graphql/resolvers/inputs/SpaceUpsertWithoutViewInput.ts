import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceUpdateWithoutViewInput } from "../inputs/SpaceUpdateWithoutViewInput";

@TypeGraphQL.InputType("SpaceUpsertWithoutViewInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutViewInput {
  @TypeGraphQL.Field(_type => SpaceUpdateWithoutViewInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutViewInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutViewInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutViewInput;
}
