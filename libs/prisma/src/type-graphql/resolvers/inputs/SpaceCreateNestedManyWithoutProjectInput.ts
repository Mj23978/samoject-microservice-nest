import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyProjectInputEnvelope } from "../inputs/SpaceCreateManyProjectInputEnvelope";
import { SpaceCreateOrConnectWithoutProjectInput } from "../inputs/SpaceCreateOrConnectWithoutProjectInput";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class SpaceCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [SpaceCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;
}
