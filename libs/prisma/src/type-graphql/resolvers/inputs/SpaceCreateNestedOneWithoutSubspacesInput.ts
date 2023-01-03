import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutSubspacesInput } from "../inputs/SpaceCreateOrConnectWithoutSubspacesInput";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedOneWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutSubspacesInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutSubspacesInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutSubspacesInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
