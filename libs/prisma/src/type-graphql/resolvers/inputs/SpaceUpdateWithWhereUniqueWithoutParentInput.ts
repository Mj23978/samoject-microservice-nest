import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceUpdateWithoutParentInput } from "../inputs/SpaceUpdateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class SpaceUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutParentInput, {
    nullable: false
  })
  data!: SpaceUpdateWithoutParentInput;
}
