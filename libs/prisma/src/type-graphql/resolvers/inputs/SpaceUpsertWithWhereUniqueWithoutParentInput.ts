import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceUpdateWithoutParentInput } from "../inputs/SpaceUpdateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class SpaceUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutParentInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutParentInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutParentInput;
}
