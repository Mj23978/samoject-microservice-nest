import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyParentInputEnvelope } from "../inputs/SpaceCreateManyParentInputEnvelope";
import { SpaceCreateOrConnectWithoutParentInput } from "../inputs/SpaceCreateOrConnectWithoutParentInput";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyWithWhereWithoutParentInput } from "../inputs/SpaceUpdateManyWithWhereWithoutParentInput";
import { SpaceUpdateWithWhereUniqueWithoutParentInput } from "../inputs/SpaceUpdateWithWhereUniqueWithoutParentInput";
import { SpaceUpsertWithWhereUniqueWithoutParentInput } from "../inputs/SpaceUpsertWithWhereUniqueWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [SpaceCreateWithoutParentInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: SpaceUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyParentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SpaceUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: SpaceUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: SpaceUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SpaceScalarWhereInput[] | undefined;
}
