import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyProjectInputEnvelope } from "../inputs/SpaceCreateManyProjectInputEnvelope";
import { SpaceCreateOrConnectWithoutProjectInput } from "../inputs/SpaceCreateOrConnectWithoutProjectInput";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyWithWhereWithoutProjectInput } from "../inputs/SpaceUpdateManyWithWhereWithoutProjectInput";
import { SpaceUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/SpaceUpdateWithWhereUniqueWithoutProjectInput";
import { SpaceUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/SpaceUpsertWithWhereUniqueWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => [SpaceCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: SpaceUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  set?: SpaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SpaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  delete?: SpaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: SpaceUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: SpaceUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SpaceScalarWhereInput[] | undefined;
}
