import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyProjectInputEnvelope } from "../inputs/SpaceCreateManyProjectInputEnvelope";
import { SpaceCreateOrConnectWithoutProjectInput } from "../inputs/SpaceCreateOrConnectWithoutProjectInput";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyWithWhereWithoutProjectInput } from "../inputs/SpaceUpdateManyWithWhereWithoutProjectInput";
import { SpaceUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/SpaceUpdateWithWhereUniqueWithoutProjectInput";
import { SpaceUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/SpaceUpsertWithWhereUniqueWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithoutProjectNestedInput {
  @Field(() => [SpaceCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutProjectInput[] | undefined;

  @Field(() => [SpaceCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutProjectInput[] | undefined;

  @Field(() => [SpaceUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: SpaceUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => SpaceCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyProjectInputEnvelope | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  set?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  delete?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: SpaceUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => [SpaceUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: SpaceUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @Field(() => [SpaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SpaceScalarWhereInput[] | undefined;
}
