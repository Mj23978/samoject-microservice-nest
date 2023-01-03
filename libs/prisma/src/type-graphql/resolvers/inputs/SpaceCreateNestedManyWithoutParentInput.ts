import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyParentInputEnvelope } from "../inputs/SpaceCreateManyParentInputEnvelope";
import { SpaceCreateOrConnectWithoutParentInput } from "../inputs/SpaceCreateOrConnectWithoutParentInput";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class SpaceCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [SpaceCreateWithoutParentInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;
}
