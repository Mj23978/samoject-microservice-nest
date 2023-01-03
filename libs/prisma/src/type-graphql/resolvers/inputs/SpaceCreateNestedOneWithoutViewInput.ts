import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutViewInput } from "../inputs/SpaceCreateOrConnectWithoutViewInput";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedOneWithoutViewInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutViewInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutViewInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutViewInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutViewInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutViewInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
