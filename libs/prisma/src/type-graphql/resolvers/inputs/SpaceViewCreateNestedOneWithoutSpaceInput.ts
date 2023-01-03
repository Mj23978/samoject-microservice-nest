import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceViewCreateOrConnectWithoutSpaceInput";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.InputType("SpaceViewCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewCreateNestedOneWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceViewCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceViewCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceViewWhereUniqueInput | undefined;
}
